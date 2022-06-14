const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    email: {type:String, trim:true,unique:true, lowercase:true, required:true},
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    age: {type:Number, required:true},
    password: {type:String, trim:true, required:true, minlength:3, maxlength:255},
    phone: {type:Number},
    picture: {type:String},
    favorites:[],
    active: Boolean
}, {
    timestamps:true
});
const User = mongoose.model('User', userSchema);
module.exports = User;