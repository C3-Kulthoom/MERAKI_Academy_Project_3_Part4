const express = require("express");
const { createNewAuthor } = require("../controllers/users");

// define router
const usersRouter = express.Router();

// 			routes
//post  http://localhost:5000/users/

usersRouter.post("/", createNewAuthor);

module.exports = usersRouter;
