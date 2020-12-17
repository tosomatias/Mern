const userControllers = {};
const User = require('../models/Users');


userControllers.getUsers = async(req,res) => {
    const users = await User.find();
    res.json(users)
};

userControllers.createUsers = async(req,res) => {
    const {username} = req.body;
    const newUser =  new User ({
        username
    });
    await newUser.save();
    res.json({messsage:'User Created'}) 
};

userControllers.deleteUsers = async(req,res) => {
    await User.findByIdAndDelete(req.params.id);

    res.json({messsage:'User delete'}) 
};

module.exports = userControllers;