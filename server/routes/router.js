const express = require('express')
const services = require('../services/render')
const route = express.Router()


// getting data from the database
route.get('/', services.homeRoutes);
//  Adding new user data in database 
route.get('/add-user', services.add_user);
//  Updating user data in database
route.get('/update_user', services.update_user);

module.exports = route;