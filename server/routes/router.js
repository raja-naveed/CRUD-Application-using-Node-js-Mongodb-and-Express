const express = require('express')

const route = express.Router()


// getting data from the database
route.get('/', (req, res) =>{
    res.render('index'); 
});
//  Adding new user data in database 
route.get('/add-user', (req, res) =>{
    res.render('add_user'); 
});
//  Updating user data in database
route.get('/update_user', (req, res) =>{
    res.render('update_user');
});

module.exports = route;