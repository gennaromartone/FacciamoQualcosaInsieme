import mongoose from 'mongoose'

const Shoops = new mongoose.Schema({

    _category: [{ type: mongoose.Schema.Types.ObjectId, ref:'ShoopCategories'}],
    name: String,
    description: String,
    rates: { type: Number, min: 0, max: 5 ,default:0 },
    location: {
        type: { type: String },
        coordinates: []
    },
    _user: { type: mongoose.Schema.Types.ObjectId, ref:'User'},
    metaTag: [String],
    _product: {type: mongoose.Schema.Types.ObjectId, ref:'Products'}

});

Shoops.index({ location: "2dsphere" });


mongoose.model('Shoops',Shoops);
export default mongoose.model('Shoops');