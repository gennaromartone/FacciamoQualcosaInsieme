import mongoose from 'mongoose';
import keys from './../keys'

mongoose.connect(keys.mongoDB.mongoURI);