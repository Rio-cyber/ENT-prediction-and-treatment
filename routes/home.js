const express = require('express')
const router = express.Router()

const { ensureAuthenticated } = require('../config/auth')


router.get('/', ensureAuthenticated, (req, res, next) => {
    if(req.user.role == 'customer') {
        res.render('dashboard/patient_home', {layout: false, username: req.user.name})
    } else if(req.user.role == 'testing') {
        res.render('dashboard/doc_home', {layout: false, username: req.user.name})
    }
})


module.exports = router