//Imports
require('dotenv').config();
const express = require('express');
require('./config/database');
const app = express();
//PORT
const port = 8080;

//========== Middleware =============
app.use(express.urlencoded({ extended: false }));
//Use express middleware to parse JSON
app.use(express.json());

app.use((req, res, next) => {
    console.log('I run for all the routes.');
    next();
});

app.use(require('./config/checkToken'));


//======ROUTES
//Users
app.use('/api/v1/users', require('./routes/api/users'));

//Protect API routes bellow from anuthorized users
const ensureLoggedIn = require('./config/ensureLoggedIn');
//Movies
app.use('/api/v1/movies', ensureLoggedIn, require('./routes/api/movies'));



app.listen(port, () => console.log(`Listening to port ${port}`));