const userservices = require('../data/Users/UserServices');

const getAllUsers = async (req, res) => {
    try {
        const users = await userservices.getAllUsers();
        res.status(200).send(users);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}

const getUserByID = async (req, res) => {
    try {
        let id = req.params.id
        const user = await userservices.getUserByID(id);
        res.status(200).send(user);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}

const createtUser = async (req, res) => {
    try {
        const data = req.body;
        const user = await userservices.createuser(data);
        res.status(201).send(user);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const user = await userservices.updateUser(id, data);
        res.status(204).send(user);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllUsers,
    getUserByID,
    createtUser,
    updateUser
}