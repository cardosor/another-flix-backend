const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const movieSchema = new Schema({
    title: {type:String, required:true},
    genre: {type:String, required:true},
    year: {type:Number, required:true},
    plot: {type:String, required:true},
    image: String,
    contentRating: String,
    runTimeMins: Number,
    imDbRating: Number
}, {timestamps:true});
const Movie = mongoose.model('Video', movieSchema);
module.exports = Movie;