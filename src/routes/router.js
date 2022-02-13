const express = require('express');

const userController = require('./controllers/userController');
const addressController = require('./controllers/AddressController');

const router = express.Router();

router.post("/addUser", userController.addUser);

router.delete("/delete/:id",userController.deleteUser);

router.get('/getUsers',userController.getUsers);

router.post('/addresses/:userId',addressController.addAddress);

router.get('/getAddresses/:id', addressController.getAddress)

module.exports = router;