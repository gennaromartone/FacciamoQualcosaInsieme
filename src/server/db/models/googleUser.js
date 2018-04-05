import mongoose from 'mongoose'

const googleUserSchema = new mongoose.Schema({

    googleID: String,
    credits: { type:Number, default:0}

})

mongoose.model('googleUsers', googleUserSchema)
export default mongoose.model('googleUsers')