import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import ShoopCategories from './../db/models/ShoopCategories';

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// RETURNS ALL THE SHOOP CATEGORIES IN THE DATABASE
router.get('/getShoopCategories', (req,res) => {

    ShoopCategories.find({} , (err,categories) => {
        if (err) return res.status(500).send("There was a problem finding the categories.");
        res.status(200).send(categories);
    })
})

router.get('/setShoopCategories', (req,res) => {
    
        ShoopCategories.create(categoriesData , (err,categories) => {
            if (err) return res.status(500).send("There was a problem saving the categories.");
            res.status(200).send(categories);
        })
    })

router.get('/delShoopCategories', (req,res) => {
    
        ShoopCategories.remove({} , (err,categories) => {
            if (err) return res.status(500).send("There was a problem saving the categories.");
            res.status(200).send(categories);
        })
    })

export default router;

export const categoriesData = 
    [
        {
            id:0,
            name:'Food Shoop',
            urlIcon:''
        },
        {
            id:1,
            name:'Restaurant',
            urlIcon:''
        },
        {
            id:2,
            name:'Electronic Shoop',
            urlIcon:''
        }
    ]
