const mongoose = require('mongoose')

const Schema = mongoose.Schema

const throatSchema = new Schema({
    uid: {
        type: String,
        required: true,
        unique: true
    },
    full_name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    cough: {
        type: String,
        required: true
    },
    blood: {
        type: String,
        required: true
    },
    swallow: {
        type: String,
        required: true
    },
    eyes: {
        type: String,
        required: true
    },
    sneeze: {
        type: String,
        required: true
    },
  
    type: {
        type: String,
        required: true
    },
    feedback: {
        type: String
    },
    status: {
        type: String,
        required: true
    },
    booking_user: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model('Throat', throatSchema)