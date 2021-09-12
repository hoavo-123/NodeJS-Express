const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/usercontroller');


router.get('/users', usercontroller.getAllUsers)
router.get('/user/:id', usercontroller.getUserByID)
router.post('/user', usercontroller.createtUser)
router.put('/user/:id', usercontroller.updateUser)


module.exports = {
    routes: router
}
