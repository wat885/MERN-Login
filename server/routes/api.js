const express = require("express");
const router = express.Router();

//controller
const {
  register,
  login,
  listUser,
  editUser,
  deleteUser,
  
} = require("../controllers/auth");

//endpoint http://localhost:3000/api/register
//method    post ส่งข้อมูล
//Access    publish
router.post("/register", register);

//endpoint http://localhost:3000/api/register
//method    post ส่งข้อมูล
//Access    publish
router.post("/login", login);

//endpoint http://localhost:3000/api/auth
//method    get
//Access    publish
router.get("/auth", listUser);

//endpoint http://localhost:3000/api/auth
//method    put  แก้ไข
//Access    publish
router.put("/auth", editUser);

//endpoint http://localhost:3000/api/auth
//method    delete
//Access    publish
router.delete("/auth", deleteUser);

module.exports = router;
