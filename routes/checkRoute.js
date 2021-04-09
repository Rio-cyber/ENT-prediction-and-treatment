const express = require('express')
const router = express.Router()

const { ensureAuthenticated } = require('../config/auth')

// Appointment model
const Ear = require('../models/earModel')
const Throat = require('../models/throatModel')
const Nose = require('../models/noseModel')

router.get('/',ensureAuthenticated, (req, res, next) => {
    res.render('dashboard/report_home', {
        layout: false,
        username: req.user.name
    })
})

router.get('/ear',ensureAuthenticated, (req, res, next) => {
    Ear.find({booking_user: req.user._id}, (err, result) => {    
        res.render('dashboard/check_report', {
            layout: false,
            results: result,
            username: req.user.name
        })
    })
})

router.get('/nose',ensureAuthenticated, (req, res, next) => {
    Nose.find({booking_user: req.user._id}, (err, result) => {    
        res.render('dashboard/check_report', {
            layout: false,
            results: result,
            username: req.user.name
        })
    })
})

router.get('/throat',ensureAuthenticated, (req, res, next) => {
    Throat.find({booking_user: req.user._id}, (err, result) => {    
        res.render('dashboard/check_report', {
            layout: false,
            results: result,
            username: req.user.name
        })
    })
})

module.exports = router