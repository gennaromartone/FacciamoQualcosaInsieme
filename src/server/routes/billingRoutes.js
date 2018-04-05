import express from 'express'
import bodyParser from 'body-parser'

import stripe from 'stripe'

import keys from './../keys'

import {requireLogin} from './../middlewares/requireLogin' 

const stripeHandler = stripe(keys.stripe.secretkey)

var router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/stripe/payments', requireLogin, async (req,res) => {
    //console.log('req body: ',req.body)

    // if the user is not logged in we refuse it wit an 401 Forbidden and a mess You must log in
    //APPLY MIDDLEWARE with requireLogin
    

    const charge = await stripeHandler.charges.create({
        amount:500,
        currency:'usd',
        description:'',
        source:req.body.id
    })

    req.user.credits += 5
    const user = await req.user.save();

    res.send(user);
})

export default router;