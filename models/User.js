/**
 * Created by tredgamerz on 21/04/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    email:String,
    name:String,
    location:String,
    type:Number,
    facebook:{
        state:Number,
        id:String,
        name:String,
        token:String,
        email:String
    },
    google:{
        state:Number,
        id:String,
        name:String,
        token:String,
        email:String
    }
});

var User = module.exports = mongoose.model('User',UserSchema);
