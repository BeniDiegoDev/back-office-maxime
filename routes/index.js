var express = require('express');
var router = express.Router();
var bcrypt = require("bcrypt");
var uid2 = require("uid2");

var photoModel = require('../models/photoModel')
var userModel = require('../models/userModel')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

module.exports = router;
