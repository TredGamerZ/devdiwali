/**
 * Created by m on 10/19/2017.
 */
var mongoose = require('mongoose');
var User = require('./User');
var Schema = mongoose.Schema;

var LightSchema = Schema({

    creator:{ type: Schema.Types.ObjectId, ref: 'User'},
    creatorName : String,
    creatorLocation :String,
    lighter:[{type:Schema.Types.ObjectId, ref:'User'}],
    strength:Number
});

var Light = module.exports = mongoose.model('Light',LightSchema);
