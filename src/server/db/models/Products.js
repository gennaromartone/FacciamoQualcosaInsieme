import mongoose from 'mongoose';

const Products = new mongoose.Schema({

    title: String,
    description: String,
    prize: Number,
    img: String,
    details: String

});

Products.index({ title: 1 });

mongoose.model('Products', Products);
export default mongoose.model('Products');