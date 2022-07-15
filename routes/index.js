var express = require('express');
var router = express.Router();
var bcrypt = require("bcrypt");
var uid2 = require("uid2");

var photoModel = require('../models/photoModel')
var userModel = require('../models/userModel')
var presentationModel = require('../models/presentationModel')

/* GET home page. */
router.get('/', function (req, res, next) {
  if (!req.session.user) {
    req.session.user = null;
  }
  res.render('index');
});

/* ROUTE GET HOME */
router.get('/home', async function (req, res, next) {
  if (req.session.user == null) {
    res.redirect('/');
  } else {
    var user = await userModel.find(req.session.user);
    res.render('home', { user });
  }
});

/* ROUTE GET PRESENTATION */
router.get('/presentation', async function (req, res, next) {
  if (req.session.user == null) {
    res.redirect('/');
  } else {
    var presentation = await presentationModel.find();
    res.render('presentation', { presentation });
  }
});

/* ROUTE GET GALERIE */
router.get('/galerie', async function (req, res, next) {
  if (req.session.user == null) {
    res.redirect('/');
  } else {
    var galerie = await photoModel.find();
    // console.log(galerie);
    res.render('galerie', { galerie });
  }
});

/* ROUTE ADD PHOTO GALERIE */
router.post('/addphoto', async function (req, res, next) {
  
    var searchPhoto = await photoModel.findOne({
      name: req.body.nameFromFront,
    })

    if (!searchPhoto) {
      var newPhoto = new photoModel({
        name: req.body.nameFromFront,
        categorie: req.body.categorieFromFront,
        img: req.body.imgFromFront,
        miniatures: req.body.miniaturesFromFront,
      })

      console.log(newPhoto);

      var newPhotoSave = await newPhoto.save();

      console.log(newPhotoSave);

      res.redirect('/galerie');
    } else {
      
    }
});

/* ROUTE DELETE PHOTO GALERIE */
router.get('/deletephoto', async function (req, res, next) {

  await photoModel.deleteOne({
    _id: req.query.id
  });

  res.redirect('/galerie');
});

/* ROUTE GET CONTACT */
router.get('/contact', async function (req, res, next) {
  if (req.session.user == null) {
    res.redirect('/');
  } else {
    res.render('contact');
  }
});

module.exports = router;
