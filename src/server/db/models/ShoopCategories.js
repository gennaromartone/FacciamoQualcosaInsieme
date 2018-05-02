import mongoose from 'mongoose'

const ShoopCategories = new mongoose.Schema({

    name:String,
    id:Number,
    urlIcon:String

})

mongoose.model('shoopCategories', ShoopCategories);
export default mongoose.model('shoopCategories');