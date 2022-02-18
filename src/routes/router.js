const express = require("express");

const userController = require("./controllers/userController");
const addressController = require("./controllers/AddressController");
const tagController = require("./controllers/tagController");

const router = express.Router();

router.post("/addUser", userController.addUser);
router.delete("/delete/:id", userController.deleteUser);
router.get("/getUsers", userController.getUsers);

router.post("/addresses/:userId", addressController.addAddress);
router.get("/getAddresses/:id", addressController.getAddress);

router.post("/tags/:userId", tagController.addTag);
router.get("/tags/:userId", tagController.getTags);
router.delete("/tags/:userId", tagController.removeTag);

module.exports = router;
