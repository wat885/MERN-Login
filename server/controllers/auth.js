const bcrypt = require('bcryptjs')
const User = require('../models/User')

exports.register = async (req, res) => {
  try {
    // check user
    const {username, password} = req.body;
    var user = await User.findOne({username}) // มี userนี้แล้วไหม
    if(user) {
      return res.status(400).send("User Already exists") 
    }
    const slat = await bcrypt.genSalt(10)
    user = new User({
      username,
      password
    })
    // Encrypt //เข้ารหัส
    user.password = await bcrypt.hash(password,slat)
    await user.save()
    res.send("Register Success");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
};

exports.listUser = async (req, res) => {
  try {
    res.send("list Get User");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
};

exports.editUser = async (req, res) => {
  try {
    res.send("editUser");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
};

exports.deleteUser = async (req, res) => {
  try {
    res.send("deleteUser");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
};