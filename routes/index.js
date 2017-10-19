var express = require('express');
var router = express.Router();
var Light = require('../models/Light');

/* GET home page. */
router.get('/', function(req, res, next) {

        if(req.user){
            res.redirect('/'+req.user._id);
        }
        Light.find({}).populate(['creator']).exec(function (err,callback) {

            if (callback) {
                var al = callback.length;
                console.log(callback);
                res.render('index', {title: 'Diwali | Light Up ', Lights: JSON.stringify(callback),al:al});

            }
        });

});

router.get('/:id',function (req,res,next) {
    // console.log(req.user);
    var id = req.params['id'];
    if(!req.user){
        console.log("Not Signed In");
        Light.findOne({creator:id}).populate(['creator']).exec(function (err,light1) {
            if(light1){
                console.log("Main Found");
                console.log(light1);
                Light.find({}).exec(function (err,lights) {
                    if(lights){
                        var al = lights.length;
                        res.render('user',{title: "Diwali | Light Up " , user:req.user,usr:false ,userLight:JSON.stringify(light1), Lights:JSON.stringify(lights),al:al});
                    }
                });
            }
        });
    }
    else if(req.user._id == id){
        console.log("Signed In User");
        Light.findOne({creator:id}).populate(['creator']).exec(function (err,light1) {
            if(light1){
                console.log("Main Found");
                console.log(light1);
                Light.find({}).exec(function (err,lights) {
                    if(lights){
                        var al = lights.length;
                        res.render('user',{title: "Diwali | Light Up " , user:req.user,usr:true ,userLight:JSON.stringify(light1), Lights:JSON.stringify(lights),al:al});
                    }
                });
            }
        });
    }
    else
        res.render('user',{title: "Diwali | Light Up | "+req.user.name ,user:null});
});

module.exports = router;
