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


//======ROUTES
//Movies
app.use('/api/v1/movies', require('./routes/api/movies'));

//Users
app.use('/api/v1/users', require('./routes/api/users'));

app.listen(port, () => console.log(`Listening to port ${port}`));