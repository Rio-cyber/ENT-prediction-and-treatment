const express = require('express')
const {v4 : uuidv4} = require('uuid')
const router = express.Router()

const { ensureAuthenticated } = require('../config/auth')

// Throat model
const Throat = require('../models/throatModel')

router.get('/', ensureAuthenticated, (req, res, next) => {
    if(req.user.role == 'customer') {
        res.render('dashboard/throat_form', {layout: false, username: req.user.name})
    } else {
        res.redirect('/appointments')
    }
})

router.post('/', ensureAuthenticated, (req, res, next) => {
    if(req.user.role == 'customer') {
        const { cough, blood, swallow, eyes, sneeze, sore_throat, fatigue, nausea } = req.body;
        const throat = new Throat({
            uid: uuidv4(),
            full_name: req.user.name,
            email: req.user.email,
            age: req.user.age,
            gender: req.user.gender,
            cough,
            blood,
            swallow,
            eyes,
            sneeze,
            status: 'Pending',
            type: 'throat',
            booking_user: req.user._id
        })
        
        throat.save().then((throat) => {
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