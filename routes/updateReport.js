const express = require('express')
const router = express.Router()

const { ensureAuthenticated } = require('../config/auth')

// Models
const Throat = require('../models/throatModel')
const Ear = require('../models/earModel')
const Nose = require('../models/noseModel')

router.get("/nose/:uid", ensureAuthenticated, (req, res, next) => {    
    if(req.user.role == 'testing') {
        Nose.find({ uid: req.params.uid }, (err, result) => {
            if (result.length) {
                res.render('doctor/nose', {layout: false, results: result, username: req.user.name})
            }
            else {
                return res.redirect('/home')
            }    
        })
    } else {
        res.redirect('/home')
    }
})

router.get("/ear/:uid", ensureAuthenticated, (req, res, next) => {    
    if(req.user.role == 'testing') {
        Ear.find({ uid: req.params.uid }, (err, result) => {
            if (result.length) {
                res.render('doctor/ear', {layout: false, results: result, username: req.user.name})
            }
            else {
                return res.redirect('/home')
            }    
        })
    } else {
        res.redirect('/home')
    }
})

router.get("/throat/:uid", ensureAuthenticated, (req, res, next) => {    
    if(req.user.role == 'testing') {
        Throat.find({ uid: req.params.uid }, (err, result) => {
            if (result.length) {
                res.render('doctor/throat', {layout: false, results: result, username: req.user.name})
            }
            else {
                return res.redirect('/home')
            }    
        })
    } else {
        res.redirect('/home')
    }
})

router.post('/ear/:uid', ensureAuthenticated, (req, res) => {
    const uid = req.params.uid;
    const { feedback } = req.body;

    if(req.user.role == 'testing') {
        Ear.findOneAndUpdate({ uid: uid }, { "$set": { feedback: feedback, status: 'Available' }}, (err, result) => {
            if (err) {
                req.flash('error_msg', 'Something went wrong.')
                console.log(err)
                return res.redirect('/home')
            }
            else {
                req.flash('success_msg', 'Update Successful.')
                res.redirect('/home')
            }    
        })
    } else {
        res.redirect('/home')
    }
})

router.post('/nose/:uid', ensureAuthenticated, (req, res) => {
    const uid = req.params.uid;
    const { feedback } = req.body;

    if(req.user.role == 'testing') {
        Nose.findOneAndUpdate({ uid: uid }, { "$set": { feedback: feedback, status: 'Available' }}, (err, result) => {
            if (err) {
                req.flash('error_msg', 'Something went wrong.')
                console.log(err)
                return res.redirect('/home')
            }
            else {
                req.flash('success_msg', 'Update Successful.')
                res.redirect('/appointments/nose')
            }    
        })
    } else {
        res.redirect('/home')
    }
})

router.post('/throat/:uid', ensureAuthenticated, (req, res) => {
    const uid = req.params.uid;
    const { feedback } = req.body;

    if(req.user.role == 'testing') {
        Throat.findOneAndUpdate({ uid: uid }, { "$set": { feedback: feedback, status: 'Available' }}, (err, result) => {
            if (err) {
                req.flash('error_msg', 'Something went wrong.')
                console.log(err)
                return res.redirect('/home')
            }
            else {
                req.flash('success_msg', 'Update Successful.')
                res.redirect('/appointments/throat')
            }    
        })
    } else {
        res.redirect('/home')
    }
})


module.exports = router
