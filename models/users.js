const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        minLength: 3,
    },
    email: {
        type: String,
        trim:true
    },
    firmName: {
        type: String,
        trim: true
    },
    country: {
        type: String,
        trim: true
    }
}, { timestamps: true });

module.exports = mongoose.model('user', userSchema);