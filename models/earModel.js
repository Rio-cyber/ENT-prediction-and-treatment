const mongoose = require('mongoose')

const Schema = mongoose.Schema

const earSchema = new Schema({
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
    fullness: {
        type: String,
        required: true
    },
    hearing_loss: {
        type: String,
        required: true
    },
    dizziness: {
        type: String,
        required: true
    },
    vomitting: {
        type: String,
        required: true
    },
    pressure: {
        type: String,
        required: true
    },
    fluid: {
        type: String,
        required: true
    },
    tenderness: {
        type: String,
        required: true
    },
    perception: {
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

module.exports = mongoose.model('Ear', earSchema)