const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//INDUCES

//POST create /api/v1/users
router.post('/', usersController.create);

//POST login /api/v1/users/login
router.post('/login', usersController.login);


//The below routes should not be accessible to unauthorized users
//GET show /api/v1/users/:id
router.get('/:id',ensureLoggedIn, usersController.show);


//GET get favorites /api/v1/users/:id/favorites
router.get('/:id/favorites',ensureLoggedIn, usersController.getFavorites);

//PUT update /api/v1/users/:id
router.put('/:id',ensureLoggedIn, usersController.update);

module.exports = router;