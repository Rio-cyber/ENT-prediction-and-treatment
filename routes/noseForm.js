const express = require('express')
const {v4 : uuidv4} = require('uuid')
const router = express.Router()

const { ensureAuthenticated } = require('../config/auth')

// Nose model
const Nose = require('../models/noseModel')

router.get('/', ensureAuthenticated, (req, res, next) => {
    if(req.user.role == 'customer') {
        res.render('dashboard/nose_form', {layout: false, username: req.user.name})
    } else {
        res.redirect('/appointments')
    }
})

router.post('/', ensureAuthenticated, (req, res, next) => {
    if(req.user.role == 'customer') {
        const { pain, runny_nose, allergic, taste_loss, headache, pressure, carbon_monoxide, methane } = req.body;
        const nose = new Nose({
            uid: uuidv4(),
            full_name: req.user.name,
            email: req.user.email,
            age: req.user.age,
            gender: req.user.gender,
            pain,
            runny_nose,
            allergic,
            taste_loss,
            headache,
            pressure,
            carbon_monoxide,
            methane,
            type: 'nose',
            status: 'Pending',
            booking_user: req.user._id
        })
        
        nose.save().then((nose) => {
            req.flash('success_msg', 'Successfully Submitted.')
            return res.redirect('/home')
        }).catch(err => {
            console.log(err)
            req.flash('error', 'Something went wrong')
            return res.redirect('/nose')
        })
    } else {
        req.flash('error', 'Not Allowed')
        return res.redirect('/home')
    }
})


module.exports = router