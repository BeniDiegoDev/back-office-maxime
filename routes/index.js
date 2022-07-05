var express = require('express');
var router = express.Router();
var bcrypt = require("bcrypt");
var uid2 = require("uid2");

var photoModel = require('../models/photoModel')
var userModel = require('../models/userModel')

/* GET home page. */
router.get('/', function(req, res, next) {
  if (!req.session.user) {
    req.session.user = null;
  }
  res.render('index');
});

/* ROUTE GET HOMEPAGE */
router.get('/home', async function(req, res, next) {
  if (req.session.user == null) {
    res.redirect('/');
  } else {
  res.render('home');
  }
  console.log(req.session.user);
});

module.exports = router;
