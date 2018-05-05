import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Shoops from './../db/models/Shoops';

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/getShoops/:long/:lang', (req , res) => {

    Shoops.find({
        location:{
            $near: {
                $maxDistance: 1000,
                $geometry: {
                 type: "Point",
                 coordinates: [req.params.long, req.params.lang]
                }
            }
        }
    }).find( (err, shops ) => {
        if( err ){
            console.error('ERROR FINDING SHOOPS: ',err);
            res.status(500).send("There was a problem finding the Shoops.");
        } else if( !Shoops) 
        res.status(404).send("No Shoops Finded ");
        else 
            res.status(200).send(shops);
    });
});

router.post('/saveShoop', (req,res) => {

    const {name, description, categoryID, long, lat} = req.body;

    const shoop = new Shoops({
        name,
        description,
        location: {
            type:'Point',
            coordinates: [long, lat]
        },
        _category: categoryID
    });

    shoop.save( (err, shop) => {
        if( err ){
            console.error('ERROR FINDING SHOOPS: ',err);
            res.status(500).send("There was a problem saveing the Shoop.");
        }
        else
            res.status(200).send(shoop);
    })
})

export default router;