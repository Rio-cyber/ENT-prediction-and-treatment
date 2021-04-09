const express = require('express')
const router = express.Router()

// Models
const Throat = require('../models/throatModel')
const Ear = require('../models/earModel')
const Nose = require('../models/noseModel')

// Updating Handle
router.get("/nose/:uid", (req, res, next) => {    
    Nose.find({ uid: req.params.uid }, (err, result) => {
        if (result.length) {
            return res.render('pdf/verify', { layout: false, result: result})
            //return res.send(`Details Found. The report status of ${result[0].full_name} is ${result[0].status_text} on ${result[0].date}`)
        }
        else {
            return res.send('Not Found. Looks like the report doesn\'t exists.')
        }    
    })
})

router.get("/ear/:uid", (req, res, next) => {    
    Ear.find({ uid: req.params.uid }, (err, result) => {
        if (result.length) {
            return res.render('pdf/verify', { layout: false, result: result})
            //return res.send(`Details Found. The report status of ${result[0].full_name} is ${result[0].status_text} on ${result[0].date}`)
        }
        else {
            return res.send('Not Found. Looks like the report doesn\'t exists.')
        }    
    })
})

router.get("/throat/:uid", (req, res, next) => {    
    Throat.find({ uid: req.params.uid }, (err, result) => {
        if (result.length) {
            return res.render('pdf/verify', { layout: false, result: result})
            //return res.send(`Details Found. The report status of ${result[0].full_name} is ${result[0].status_text} on ${result[0].date}`)
        }
        else {
            return res.send('Not Found. Looks like the report doesn\'t exists.')
        }    
    })
})


module.exports = router