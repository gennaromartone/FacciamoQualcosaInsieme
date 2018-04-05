// ADD GOOGLE strategy for passport Authentication
// IMPORT PASSPORT FOR OAUTH GOOGLE

import {logStars} from './../config';

import passport from 'passport'
import GoogleStrategy from 'passport-google-oauth20'
import keys from './../keys'

import mongoose from 'mongoose'
import GoogleUsers from './../db/models/googleUser'

// don't export explicity the model because in a test envirment using tests mongoose
// can be confused and return errors
//const GoogleUsers = mongoose.model('googleUsers');

/* done( err, object ) is middlware called by passport  */

// serialize the OAuthUser ID and passport put it in the cookie headers
passport.serializeUser( (googleUser, done) => {
    logStars('USER SERIALIZZATO')
    done(null, googleUser.id)
} )


// diserialize an incoming ID and search in the collection for a OAuthUser with the same ID
passport.deserializeUser( (id, done) => {
    logStars('CERCO USER: '+id)
    GoogleUsers.findById( id )
    .then( googleUser => {
        logStars('USER TROVATO')
        done(null, googleUser)
    } )
} )

// CLIENT-ID: 
// CLIENT-SECRET-KEY: 
passport.use(
    new GoogleStrategy(keys.google,
        (accessToken, refreshToken, profile, done) => {
        
            GoogleUsers.findOne({googleID: profile.id}, (err,googleUser) =>{
                if (err) console.log("There was a problem finding the user.");
                if (!googleUser){
                     console.log("No user found.");

                     GoogleUsers.create({googleID: profile.id}, (err, googleuser) => {
                        console.log('User Salvato')
                        done(null, googleUser)
                    })
                }
                else{
                    console.log("Google User found: ",googleUser);
                    done(null, googleUser)
                }     
            })
            

            
    }) 
);