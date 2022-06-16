const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/api/users');

//INDUCES

//POST create /api/v1/users
router.post('/', usersController.create);

//POST login /api/v1/users/login
router.post('/login', usersController.login);

//GET show /api/v1/users/:id
router.get('/:id', usersController.show);


//GET get favorites /api/v1/users/:id/favorites
router.get('/:id/favorites', usersController.getFavorites);

//PUT update /api/v1/users/:id
router.put('/:id', usersController.update);

module.exports = router;