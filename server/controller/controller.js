const { rawListeners } = require('../model/model');
const Userdb = require('../model/model');

// Create and Save a new User
exports.create = (req, res)=>{
    if(!req.body){
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }
    // new user
    const user = new Userdb({
        name:req.body.name,
        email: req.body.email,
        gender:req.body.gender,
        status: req.body.status
    });
    // save user in the database
    user
        .save(user)
        .then(data =>{
            res.send(data);
        })
        .catch(err=>{
            res.status(500).send({
                message: err.message || "Some error occurred while creating a create operation"
            });
        })
}

// Retrieve all Users from the database.

exports.find = (req, res)=>{
    consol.log("find");
}

// Find a single User with an id

exports.update = (req, res)=>{
    consol.log("update");
}

// Update a User by the id in the request

exports.delete = (req, res)=>{
    consol.log("delete");
}
