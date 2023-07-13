import express from "express";

const router = express.Router();
const { getUser, addUser } = require("../Controllers/userController");

router.route("/:id").get(getUser);

router.route("/").post(addUser);

module.exports = router;
