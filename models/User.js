const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new Schema({
    email: {type:String, trim:true,unique:true, lowercase:true, required:true},
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    age: {type:Number, required:true},
    password: {type:String, trim:true, required:true, minlength:3, maxlength:255},
    phone: {type:String},
    picture: {type:String},
    active: Boolean,
    favorites:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Movie'
        }
    ]
}, {
    timestamps:true,
    toJSON: {
        transform: function(doc, ret){
            delete ret.password
            return ret
        }
    }
});

userSchema.pre('save', async function(next){
    //This will only hash the password for our newly created user
    //User updated password, code runs below
    this.password = await bcrypt.hash(this.password, saltRounds);
    return next();
    
});

const User = mongoose.model('User', userSchema);
module.exports = User;