const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

// load env variables
dotenv.config({path: './config.env'});
const app = express();

// log requests
app.use(morgan('tiny'));

// parse request to body-parser
app.use(bodyParser.urlencoded({extended:true}));

// set view engine
app.set("view engine", "ejs");
// app.set('views' , path.resolve(__dirname, "views/ejs"));

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

// getting data from the database
app.get('/', (req, res) =>{
    res.render('index'); 
});
//  Adding new user data in database 
app.get('/add-user', (req, res) =>{
    res.render('add_user'); 
});
//  Updating user data in database
app.get('/update_user', (req, res) =>{
    res.render('update_user');
});
const PORT = process.env.PORT || 8080;
// listiening port 
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});
