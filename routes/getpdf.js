const express = require('express')
const qr = require('qrcode')
const router = express.Router()

const { ensureAuthenticated } = require('../config/auth')

// model
const Ear = require('../models/earModel')
const Throat = require('../models/throatModel')
const Nose = require('../models/noseModel')

router.get("/nose/:uid", ensureAuthenticated, (req, res, next) => {    
    Nose.find({ uid: req.params.uid }, (err, result) => {
        if (result) {
            const url = `https://getcheck.tech/verify/${result[0].uid}`;
            qr.toDataURL(url, (err, src) => {
                if(err) {
                    return res.redirect('/home')
                } 
                res.render('pdf/reportpdf', {layout: false, results: result, src: src})
            })
        }
        else {
            return res.redirect('/home')
        }    
    })
})

router.get("/ear/:uid", ensureAuthenticated, (req, res, next) => {    
    Ear.find({ uid: req.params.uid }, (err, result) => {
        if (result) {
            const url = `https://entcheck.tech/verify/${result[0].type}/${result[0].uid}`;
            qr.toDataURL(url, (err, src) => {
                if(err) {
                    return res.redirect('/home')
                } 
                res.render('pdf/reportpdf', {layout: false, results: result, src: src})
            })
        }
        else {
            return res.redirect('/home')
        }    
    })
})

router.get("/throat/:uid", ensureAuthenticated, (req, res, next) => {    
    Throat.find({ uid: req.params.uid }, (err, result) => {
        if (result) {
            const url = `https://getcheck.tech/verify/${result[0].uid}`;
            qr.toDataURL(url, (err, src) => {
                if(err) {
                    return res.redirect('/home')
                } 
                res.render('pdf/reportpdf', {layout: false, results: result, src: src})
            })
        }
        else {
            return res.redirect('/home')
        }    
    })
})

module.exports = router