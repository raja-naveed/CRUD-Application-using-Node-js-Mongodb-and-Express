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
    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
        .then(data=>{
            if(!data){
                res.status(200).send({message:'There is no data'})
            }
            else{
                res.send(data);
            }
        }).catch(err=>{
            res.send(err).send({message:'There is no data'})
        })
    }
    else{
        Userdb.find()
    .then(user=>{
        res.send(user);
    }).catch(err=>{
        res.status(500).send({message: err.message || "Error Occurred while retriving user information"});
    })
    }
    
}

// Update User from database
exports.update = (req, res)=>{
    if(!req.body){
        return res.status(400).send({message: 'Data to update can not be empty'});
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data=>{
        if(!data){
            res.status(404).send({message: `Cannot update User with ${id}. Maybe User not found!`});
        }
        else{
            res.send(data);
        }
    }).catch(err=>{
        res.status(500).send({message: "Error Update User information"});
    })
}

// Update a User by the id in the request

exports.delete = (req, res)=>{
    const id = req.params.id;
    Userdb.findByIdAndDelete(id)
        .then(data=>{
            if(!data){
                res.status(400).send({message : 'Data is not here '})
            }
            else{
                res.send(data)
            }
        }).catch(err=>{
            res.status(300).send({message:'Error Occured while deleting data'})
        })
 }