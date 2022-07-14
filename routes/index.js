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

/* ROUTE GET HOME */
router.get('/home', async function(req, res, next) {
  if (req.session.user == null) {
    res.redirect('/');
  } else {
    var user = await userModel.find(req.session.user);
  res.render('home', { user });
  }
});

/* ROUTE GET PRESENTATION */
router.get('/presentation', async function(req, res, next) {
  if (req.session.user == null) {
    res.redirect('/');
  } else {
    var user = await userModel.find(req.session.user);
  res.render('presentation', { user });
  }
});

/* ROUTE GET GALERIE */
router.get('/galerie', async function(req, res, next) {
  if (req.session.user == null) {
    res.redirect('/');
  } else {
    var user = await userModel.find(req.session.user);
    var galerie = await photoModel.find();
    console.log(galerie);
  res.render('galerie', { user, galerie });
  }
});

/* ROUTE GET CONTACT */
router.get('/contact', async function(req, res, next) {
  if (req.session.user == null) {
    res.redirect('/');
  } else {
    var user = await userModel.find(req.session.user);
  res.render('contact', { user });
  }
});

module.exports = router;
