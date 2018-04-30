import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import {requireLogin, requireCredits} from './../middlewares/require' 

// import schema Survey to create it
import Survey from './../db/models/Survey'
//const Survey = mongoose.model('survey');
// don't export explicity the model because in a test envirment using tests mongoose
// can be confused and return errors

import Mailer from './../services/Mailer'
import surveyTemplate from './../services/emailTemplates/surveyTemplate'

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// ADD SURVEY CONTROLLER
// server.use('/api/survey', surveyController)

router.post('', requireLogin, requireCredits, (req,res) => {

    const {title, subject, body, recipients} = req.body;

    // check for error the body parameter and trow an error - TO DO
    /* if (!req.params.id) {
        throw new BadRequestError('Missing Id')
      } */
    
    let recipientsObject = recipients.split(',');

    const survey = new Survey({
        title,
        subject,
        body,
        recipients: recipientsObject.map( email => ({email:email.trim()}) ), // we wrap the return object {} with () to not mistake
                                                               // javascript interp.
        _user: req.user.id,
        dateSent: Date.now()                                                       
    })

    // now we can send the email

    const mailer = new Mailer(survey, surveyTemplate(survey));
    mailer.send().catch(err => console.log('ERR: ',err));

})

export default router;
