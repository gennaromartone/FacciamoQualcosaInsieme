// User.js

import mongoose from 'mongoose';

var UserSchema = new mongoose.Schema({  

    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },
      username: {
        type: String,
        trim: true
      },
      password: {
        type: String,
        required: true,
      },   
    lastLogin: String

});
mongoose.model('User', UserSchema);
export default mongoose.model('User')