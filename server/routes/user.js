const express = require("express");
const router = express.Router();

//controller
const {
  listUser,
  readUser,
  updateUser,
  removeUser,
  changeStatus,
} = require("../controllers/user");

// middleware
const { auth, adminCheck } = require("../middleware/auth");

//endpoint http://localhost:5000/api/users
//method    get
//Access    Private
router.get("/users", auth, adminCheck, listUser);

//endpoint http://localhost:5000/api/users/:id
//method    get
//Access    Private
router.get("/users/:id", readUser);

//endpoint http://localhost:5000/api/users/:id
//method    PUT
//Access    Private
router.put("/users/:id", updateUser);

//endpoint http://localhost:5000/api/users/:id
//method    delete
//Access    Private
router.delete("/users/:id", removeUser);

//endpoint http://localhost:5000/api/change-status
//method    Post
//Access    Private
router.post("/change-status", auth, adminCheck, changeStatus);

module.exports = router;
