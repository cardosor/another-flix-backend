//Imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

//PORT
const port = 8080;

//=====Connection to DB =====
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
// mongoose.connection.once('open', () => {
//     console.log('Connected to mongo');
// })

//Setup Engine
app.use(express.static(__dirname+'/public'));

app.use(express.urlencoded({extended:false}));

//Use express middleware to parse JSON
app.use(express.json());

//======ROUTES

//INDUCES
// app.get('/', (res, req)=>{
//     res.send({hello:"hello"});
// });


app.listen(port, () =>console.log(`Listening to port ${port}`));