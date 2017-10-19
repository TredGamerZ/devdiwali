var express = require('express');
var router = express.Router();
var Light = require('../models/Light');

/* GET home page. */
router.get('/', function(req, res, next) {


    if(req.session.light_user){
        Light.findOne({_id:light_user}).exec(function (ck) {
            if(ck){
                Light.find({}).exec(function (callback) {

                    if(callback){
                        var lights = callback;
                        res.render('index', { title: 'Diwali | Light Up ' ,light:lights,user:ck});

                    }
                    else {
                        res.render('index', { title: 'Diwali | Light Up' ,lights:null,user:null});

                    }

                });
            }
        })
    }
    else {


        Light.find({}).exec(function (callback) {

            if (callback) {
                var lights = callback;
                res.render('index', {title: 'Diwali | Light Up ', light: lights});

            }
            else {
                res.render('index', {title: 'Diwali | Light Up', lights: null});

            }

        });
    }
});

router.post('/light/add',function (req,res) {
    var nLight = new Light();
    nLight.creatorName = req.body.name;
    nLight.creatorLocation = req.body.loc;
    nLight.strength = 0;

    nLight.save(function (err) {
        if(err)
            throw err;
        else
        {
            Light.findOne({_id:nlight._id}).exec(function (callback) {
                if(callback){
                    req.session.light_user = callback._id;
                    req.session.save();
                }
            });
            res.redirect('/');

        }
    });


});

module.exports = router;
