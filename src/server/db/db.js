import mongoose from 'mongoose';
import keys from './../keys'

//mongoose.connect(keys.mongoDB.mongoURI, { autoIndex: false }); TO USE WHEN WE HAVE TO CREATE A NEW INDEX ON A TABLE WITH A LOT OF DOCUMENT

mongoose.connect(keys.mongoDB.mongoURI);

// MONGO DB can store for each document ( is a record of a collection => defined by schema ) only 4MB