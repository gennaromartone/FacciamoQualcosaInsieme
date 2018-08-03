
import express from 'express'
import bodyParser from 'body-parser'
import User from './../db/userDb'

import * as argon2 from "argon2themax";

import jwt from'jsonwebtoken';
//import bcrypt from'bcryptjs';
import config from'./../config/config';
import logger from './../config/logger';

import options from './getHaragonOptimization';

import passport from 'passport';

var router = express.Router();


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// CREATES A NEW USER
router.post('/register', async function (req, res) {

    //let hashedPassword = bcrypt.hashSync(req.body.password, 8);

    // Each password should have a secure, unique, salt. The argon2 module provides that.
const salt = await argon2.generateSalt();
const plain = req.body.password;
// Hashing happens in an asynchronous event using libuv so your system can
// still process other IO items in the Node.JS queue, such as web requests.
const hash = await argon2.hash(plain, salt, options);

// This hash is what you should store in your database. Treat it as an opaque string.
console.log('HASH PASSWORD: ',hash);

/*******   Handle rejected Promise without try block.
 * 
 *  

var response = await promisedFunction().catch((err) => { console.log(err); });
// response will be undefined if the promise is rejected
 * 
 * 
 */


    User.create({
            f_name : req.body.firstName,
            l_name : req.body.lastName,
            email : req.body.email,
            password : hash,
            verified : false,
            lastLogin : Date.now()
        }, 
        function (err, user) {
            if (err) {
                logger.info('errore: '+err)
                if( err.code == 11000 )
                    return res.status(401).send("Duplicate Email");
                return res.status(500).send("There was a problem adding the information to the database.");
            }
            
            var token = jwt.sign({ id: user._id }, config.secret, {
                expiresIn: 86400 // expires in 24 hours
              });

              //jwt.verify(token, config.secret, (err, decoded ) => {

             // })

            // serialize the OAuthUser ID and passport put it in the cookie headers
           // passport.serializeUser(user);   
           req.session ={
               token,
               user:{
                id: user._id,
                credits: user.credits
               }
           };
           req.user = {
            id: user._id,
            credits: user.credits
           }
            
            res.status(200).redirect('/user-page');
        });


});

// LOGIN
router.post('/login', (req,res) => {

    const mail = req.body.searchm;
    const password = req.bosy.searchp;

    User.findOne({email:mail}).exec( async (err,user) => {
        if (err){
            console.log("ERRORE in LOGIN: ",err)
            return res.status(500).send("There was a problem finding the users.");
        }
        else if( !user )
            return res.status(500).send("The combination of the password and username is incorrect");
        else{
            try{
                const match = await argon2.verify(hash, plain);
                console.log('MATCH: ',match);
                if( match ){

                    var token = jwt.sign({ id: user._id }, config.secret, {
                        expiresIn: 86400 // expires in 24 hours
                      });
        
                      //jwt.verify(token, config.secret, (err, decoded ) => {
        
                     // })
        
                    // serialize the OAuthUser ID and passport put it in the cookie headers
                   // passport.serializeUser(user);   
                   req.session = token;
                   req.user = {
                       id: user._id,
                       credits: user.credits
                   }

                   res.status(200).send();
                }
            }
            catch(err){
                console.log("ERRORE in LOGIN in match: ",err);
                return res.status(500).send("There was a problem in login");
            }
        }
    })

})

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
    User.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', async function (req, res) {


    User.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id', function (req, res) {
    logger.info('dentro la delete')
    User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User "+ user.f_name +" was deleted.");
    });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', function (req, res) {
    
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
});

router.get('/current_user', (req,res,done) => {
    res.send( req.user );
})


export default router;
