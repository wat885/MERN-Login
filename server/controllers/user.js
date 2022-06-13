const bcrypt = require('bcryptjs')
const User = require('../models/User')
const jwt = require('jsonwebtoken')

exports.listUser = async (req, res) => {
  try {
    // 
    res.send('hello list user')

  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
};

exports.readUser = async (req, res) => {
  try {
    // 
    res.send('hello read user')

  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
};

exports.updateUser = async (req, res) => {
  try {
    // 
    res.send('hello updateUser')

  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
};

exports.removeUser = async (req, res) => {
  try {
    // 
    res.send('hello removeUser ')

  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
};
