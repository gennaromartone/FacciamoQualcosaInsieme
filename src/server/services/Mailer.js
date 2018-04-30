import sendgrid,{mail as helper} from 'sendgrid'

import keys from './../keys'

class Mailer extends helper.Mail {
    constructor({subject,recipients},content){
        super()
        this.sgApi = sendgrid(keys.sendGrid.key)

        this.from_email = new helper.Email('no-reply@fairy-delivery.com')

        this.subject = subject;
        this.content = content;
        this.body = new helper.Content('text/html', content)

        this.recipients = this.formatAddresses(recipients)
        console.log('RECIPIENTS: ',this.recipients)
        this.addContent( this.body)
        this.addClickTracking();
        this.addRecipients();
    }

    formatAddresses(recipients){
       return recipients.map( ({email}) => {
           console.log('EMAIL: ',email)
            return new helper.Mail(email)
        })
    }

    addClickTracking(){
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true, true)

        trackingSettings.setClickTracking(clickTracking);

        this.addTrackingSettings(trackingSettings);
    }

    addRecipients(){
        let personilize = new helper.Personalization()

     /*   this.recipients.forEach( recipient => {
            console.log('DENTRO: ',recipient)
            personilize.addTo(recipient)
            console.log('DENTRO3: ',personilize)
        })*/
        personilize.addTo( new helper.Mail('ge.martone@gmail.com'));

        this.addPersonalization( personilize )
       // this.personilizations = personilize
        console.log('DENTRO2: '+this.personilizations)
    }

    async send(){
        console.log('SEND1: ',this.getPersonalizations().map( val => console.log('VAL: ',val)))
        const request = this.sgApi.emptyRequest({
            method:'POST',
            path:'/v3/mail/send',
            body: {
                personalizations: [{
                  to: [{ email: 'ge.martone@gmail.com' }],
                  subject: 'Hello World!'
                }],
                from: { email: 'no-reply@fairy-delivery.com' },
                content: [{
                  type: 'text/html',
                  value: this.content
                }],
                trackingSettings : this.getTrackingSettings
              }
        })
        console.log('SEND: ',request)
        this.sgApi.API(request).then( response => response ).catch( err => {
            console.log('ERRORE: ',err)
        }) 
    }

}

export default Mailer