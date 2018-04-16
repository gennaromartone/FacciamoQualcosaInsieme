// User.js

import mongoose from 'mongoose';

var UserSchema = new mongoose.Schema({  

    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },
      f_name: {
        type: String,
        trim: true,
        required: true,
      },
      l_name: {
        type: String,
        trim: true,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },   
      lastLogin: String,
      verified: Boolean,
      credits: { type:Number, default:0}

});
mongoose.model('User', UserSchema);
export default mongoose.model('User')