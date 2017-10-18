/**
 * Created by m on 10/19/2017.
 */
var express = require('express');
var User = require('../models/User');

var FacebookStrategy = require('passport-facebook').Strategy;
passport.use(new FacebookStrategy({

        clientID: provider.facebook.key,
        clientSecret: provider.facebook.secret,
        profileFields: ['id', 'emails', 'name' , 'photos']
    },
    function (accessToken, refreshToken, profile, done) {
        User.findOne({'email': profile.emails[0].value}, function (err, user) {
            // console.log(profile);
            if (err) {
                return done(err);
            }
            if (user) {
                if(user.facebook.id == profile.id){
                    return done(null, user);
                }
                else {

                    user.facebook.id = profile.id;
                    user.facebook.token = accessToken;
                    user.profile.image = profile.photos ? profile.photos[0].value : '/img/faces/unknown-user-pic.jpg';
                    user.facebook.email = profile.emails[0].value;
                    user.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
                    user.facebook.state = 1;
                    user.profile.name = profile.name.givenName + ' ' + profile.name.familyName;

                    user.save(function (err) {
                        if (err)
                            throw err;

                        return done(null, user);
                    });
                }
            }
        });
    }
));