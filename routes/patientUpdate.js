const express = require('express')
const {v4 : uuidv4} = require('uuid')
const router = express.Router()

const { ensureAuthenticated } = require('../config/auth')

// Appointment model
const User = require('../models/userModel')

router.get('/', ensureAuthenticated, (req, res, next) => {
    if(req.user.role == 'customer') {
        res.render('dashboard/book_form', {layout: false, username: req.user.name})
    } else {
        res.redirect('/appointments')
    }
})

router.post('/', (req, res) => {
    const { age, gender, phone } = req.body;
    
    User.findOneAndUpdate({ _id: req.user._id }, { "$set": { age: age, gender: gender, phone: phone }}, (err, result) => {
        if (err) {
            req.flash('error_msg', 'Something went wrong.')
            console.log(err)
            return res.redirect('/book')
        }
        else {
            req.flash('success_msg', 'Update Successful.')
            res.redirect('/home')
        }    
    })
})



module.exports = router