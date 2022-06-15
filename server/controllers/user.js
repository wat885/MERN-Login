const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.listUser = async (req, res) => {
  try {
    //
    const user = await User.find({}).select("-password ").exec();
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
};

exports.readUser = async (req, res) => {
  try {
    //  req.params.id =  http://localhost:5000/api/users/62a4bfadc41533db51136a69
    const id = req.params.id;
    const user = await User.findOne({ _id: id }).select("-password ").exec();
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
};

exports.updateUser = async (req, res) => {
  try {
    //
    res.send("hello updateUser");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
};

exports.removeUser = async (req, res) => {
  try {
    //
    const id = req.params.id;
    const user = await User.findOneAndDelete({ _id: id });
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
};

exports.changeStatus = async (req, res) => {
  try {
    //
    console.log(req.body);
    const user = await User.findOneAndUpdate(
      { _id: req.body.id },  // หา
      { enabled: req.body.enabled }  //
    );
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
};
