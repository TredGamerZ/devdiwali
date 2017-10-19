/**
 * Created by m on 10/19/2017.
 */
var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/User');

//Routes
router.get('/', function (req, res) {
    res.send(200);
});

router.get('/facebook', function (req, res, next) {
    var queryUrl = req.header('Referer');
    // console.log(queryUrl+" This is prev Path");
    console.log("Function Working");
    console.log(req.session);
    req.session.queryUrl = queryUrl;
    req.session.save();
    console.log(req.session.queryUrl);
    console.log("Up Done");
    next();
}, passport.authenticate('facebook', {callbackURL: 'auth/facebook/callback', scope: ['email','user_location','user_hometown','public_profile']}));


router.get('/facebook/callback', passport.authenticate('facebook',
    {callbackURL: '/auth/facebook/callback'}), function (req, res, next) {
    res.redirect('/');
});
router.get('/logout', function (req, res) {
    req.logout();
    // req.flash('success', 'Logged out Successfully');
    res.redirect('/');
});

module.exports = router;
