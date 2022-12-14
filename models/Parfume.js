const mongoose = require('mongoose');

const parfumeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    imageUrl: {
        type: String,
        required: [true, 'Image Url is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    price: {
        type: String,
        required: [true, 'Price is required']
    },
    usersPurchased: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
    ],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Parfume = mongoose.model('Parfume', parfumeSchema);

module.exports = Parfume;