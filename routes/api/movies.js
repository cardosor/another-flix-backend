const express = require('express');
const router = express.Router();
const moviesController = require('../../controllers/api/movies');

//INDUCES

//Get /api/v1/movies
router.get('/', moviesController.index);

//POST /api/v1/movies
router.post('/', moviesController.create);

//PUT /api/v1/movies/:id
router.put('/:id', moviesController.update);

//delete /api/v1/movies/:id
router.delete('/:id', moviesController.remove);

module.exports = router;