const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min:0,
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['fruit','vegetable','dairy'],
    },
<<<<<<< HEAD
    farm: {
        type: mongoose.Schema.Types.ObjectId,
=======
    farms: {
        type: Schema.Types.ObjectId,
>>>>>>> c1de93dd0e932e8af923d2418b8e2eaed561862f
        ref: 'Farm'
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;