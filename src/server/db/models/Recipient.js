import mongoose from 'mongoose'

// SUB-MODEL RECIPIENT FOR SURVEY MODEL

const recipentSchema = new mongoose.Schema({

    email: { type:String, required:true},
    responded: { type:Boolean, default:false}

})

// mongoose.model('recipient', recipentSchema)
//export default mongoose.model('recipient')

export default recipentSchema