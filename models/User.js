const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    myParfumes: [
        {
            type: String,
            ref: 'Parfume'
        }
    ],
    purchasedParfumes: [
        {
            type: String,
            ref: 'Parfume'
        }
    ]
});

const User = mongoose.model('User', userSchema);

module.exports = User;