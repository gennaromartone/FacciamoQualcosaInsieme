
import express from 'express'
import bodyParser from 'body-parser'
import User from './../db/userDb'

import jwt from'jsonwebtoken';
import bcrypt from'bcryptjs';
import config from'./../config/config';
import logger from './../config/logger'

var router = express.Router();


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// CREATES A NEW USER
router.post('/register', function (req, res) {

    let hashedPassword = bcrypt.hashSync(req.body.password, 8);

    User.create({
            f_name : req.body.firstName,
            l_name : req.body.lastName,
            email : req.body.email,
            password : hashedPassword,
            verified : false,
            lastLogin : Date.now()
        }, 
        function (err, user) {
            if (err) {
                logger.info('errore: '+err)
                return res.status(500).send("There was a problem adding the information to the database.");
            }
            
            var token = jwt.sign({ id: user._id }, config.secret, {
                expiresIn: 86400 // expires in 24 hours
              });
            
            res.status(200).send({user:user, token: token});
        });


});
// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
    User.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function (req, res) {
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
