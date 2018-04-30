import mongoose from 'mongoose';
import keys from './../keys'

mongoose.connect(keys.mongoDB.mongoURI);

// MONGO DB can store for each document ( is a record of a collection => defined by schema ) only 4MB