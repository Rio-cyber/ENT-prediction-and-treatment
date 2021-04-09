const express = require('express')
const router = express.Router()

const { ensureAuthenticated } = require('../config/auth')

// Models
const Throat = require('../models/throatModel')
const Ear = require('../models/earModel')
const Nose = require('../models/noseModel')

router.get('/ear', ensureAuthenticated, (req, res, next) => {
    if(req.user.role == 'testing') {
        Ear.find({}, (err, result) => {
            res.render('dashboard/testing_all_appointments.ejs', {layout: false, results: result, username: req.user.name})
        })
    } else {
        res.redirect('/home')
    }
})

router.get('/nose', ensureAuthenticated, (req, res, next) => {
    if(req.user.role == 'testing') {
        Nose.find({}, (err, result) => {
            res.render('dashboard/testing_all_appointments.ejs', {layout: false, results: result, username: req.user.name})
        })
    } else {
        res.redirect('/home')
    }
})

router.get('/throat', ensureAuthenticated, (req, res, next) => {
    if(req.user.role == 'testing') {
        Throat.find({}, (err, result) => {
            res.render('dashboard/testing_all_appointments.ejs', {layout: false, results: result, username: req.user.name})
        })
    } else {
        res.redirect('/home')
    }
})

module.exports = router