const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');


// load env variables
dotenv.config({path: './config.env'});
const app = express();

// log requests
app.use(morgan('tiny'));

// getting data from the database
app.get('/', (req, res) =>{
    res.send('CRUD Application with Node.js, Express, and MongoDB');
});
const PORT = process.env.PORT || 8080;
// listiening port 
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});
