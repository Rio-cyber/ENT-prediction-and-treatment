const express = require('express')
const {v4 : uuidv4} = require('uuid')
const router = express.Router()

const { ensureAuthenticated } = require('../config/auth')

// Throat model
const Ear = require('../models/earModel')

router.get('/', ensureAuthenticated, (req, res, next) => {
    if(req.user.role == 'customer') {
        res.render('dashboard/ear_form', {layout: false, username: req.user.name})
    } else {
        res.redirect('/appointments')
    }
})

router.post('/', ensureAuthenticated, (req, res, next) => {
    if(req.user.role == 'customer') {
        const { pain, fullness, hearing_loss, dizziness, vomitting, pressure, fluid, tenderness, perception } = req.body;
        const ear = new Ear({
            uid: uuidv4(),
            full_name: req.user.name,
            email: req.user.email,
            age: req.user.age,
            gender: req.user.gender,
            pain,
            fullness,
            hearing_loss,
            dizziness,
            vomitting,
            pressure,
            fluid,
            tenderness,
            perception,
            status: 'Pending',
            type: 'ear',
            booking_user: req.user._id
        })
        
        ear.save().then((ear) => {
            req.flash('success_msg', 'Successfully Submitted.')
            return res.redirect('/home')
        }).catch(err => {
            console.log(err)
            req.flash('error', 'Something went wrong')
            return res.redirect('/home')
        })
    } else {
        req.flash('error', 'Not Allowed')
        return res.redirect('/home')
    }
})


module.exports = router