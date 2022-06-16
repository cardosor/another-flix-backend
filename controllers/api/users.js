const User = require('../../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;

//Create a user
const create = async (req, res) => {
    try{
        const createdUser = await  User.create(req.body);
        res.status(200).json(createdUser)

    }catch(e){
        res.status(400).json({msg:e.message});
    }
}

//Login a user
const login = async (req, res) => {
    try{
        const foundUser = await  User.findOne({ email: req.body.email, password: req.body.password});
        res.status(200).json(foundUser)

    }catch(e){
        res.status(400).json({msg:e.message});
    }
}

//Get favorites
const getFavorites = async (req, res) => {
    try {
        const favorites = await User.findById(req.params.id).populate('favorites').select('favorites')
        res.status(200).json(favorites)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

//Update a user
// Update a user
const update = async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, saltRounds);
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedUser)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

//Show a user
const show = async (req, res) => {
    try{
        const foundUser = await  User.findById(req.params.id);
        res.status(200).json(foundUser)

    }catch(e){
        res.status(400).json({msg:e.message});
    }
}


module.exports = {
    create,
    update,
    show,
    login,
    getFavorites
}