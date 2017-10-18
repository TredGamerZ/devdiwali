/**
 * Created by m on 10/19/2017.
 */
var express = require('express');
var User = require('../models/User');
var provider = require('../config/provider');

var FacebookStrategy = require('passport-facebook').Strategy;

module.exports = function (passport,referer) {
passport.use(new FacebookStrategy({

        clientID: provider.facebook.key,
        clientSecret: provider.facebook.secret,
        profileFields: ['id', 'emails', 'name' , 'photos']
    },
    function (accessToken, refreshToken, profile, done) {
    console.log("Here");
        User.findOne({'email': profile.emails[0].value}, function (err, user) {
            // console.log(profile);
            if (err) {
                console.log("Err");

                return done(err);
            }
            if (user) {
                console.log("User Found");
                if(user.facebook.id == profile.id){
                    return done(null, user);
                }
            }
            else {
                console.log("User Not Found");
                var newSocial = new User();

                newSocial.facebook.id = profile.id;
                newSocial.facebook.token = accessToken;
                newSocial.email = profile.emails[0].value;
                // newSocial.profile.gender = profile.gender;
                newSocial.image = profile.photos ? profile.photos[0].value : '/img/faces/unknown-user-pic.jpg';
                newSocial.facebook.email = profile.emails[0].value;
                newSocial.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
                newSocial.facebook.state = 1;
                // console.log(newSocial);
                newSocial.name = profile.name.givenName + ' ' + profile.name.familyName;
                newSocial.save(function (err) {
                    if (err)
                        throw err;

                    return done(null, newSocial);
                });

            }
        });
    }
));

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user){
            // console.log(user);
            if(!err) done(null, user);
            else done(err, null)
        })
    });
};