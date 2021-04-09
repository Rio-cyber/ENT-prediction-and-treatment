const mongoose = require('mongoose')

const Schema = mongoose.Schema

const noseSchema = new Schema({
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
    pain: {
        type: String,
        required: true
    },
    runny_nose: {
        type: String,
        required: true
    },
    allergic: {
        type: String,
        required: true
    },
    taste_loss: {
        type: String,
        required: true
    },
    headache: {
        type: String,
        required: true
    },
    pressure: {
        type: String,
        required: true
    },
    carbon_monoxide: {
        type: String
    },
    methane: {
        type: String
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

module.exports = mongoose.model('Nose', noseSchema)