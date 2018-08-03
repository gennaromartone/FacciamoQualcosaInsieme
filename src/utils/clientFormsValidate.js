const Validator = {

    arrayValues : [],

    isEmail : (val) => {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        return reg.test(ev.target.value);
    },

    isEmpty : (val) => {
        return val !='';
    },

    validate: (field,val) => {
        if( field == 'email'){
            if ( isEmpty(val))
             return ''
        }
        else if ( field == 'input'){

        }

    }

}