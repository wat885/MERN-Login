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

// middleware
const {auth} = require('../middleware/auth')

//endpoint http://localhost:3000/api/register
//method    post ส่งข้อมูล
//Access    publish
router.post("/register", register);

//endpoint http://localhost:3000/api/register
//method    post ส่งข้อมูล
//Access    publish
router.post("/login", login);

//endpoint http://localhost:3000/api/1
router.get('/1',auth, ( req,res)=>{
  res.send('hello 1')
})

//endpoint http://localhost:3000/api/1
router.get('/2', ( req,res)=>{
  res.send('hello 2')
})

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
