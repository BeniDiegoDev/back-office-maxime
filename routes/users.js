var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt");
var uid2 = require("uid2");

var photoModel = require('../models/photoModel')
var userModel = require('../models/userModel')

/* ROUTE SIGNIN */
router.post('/signin', async function(req, res, next) {

    var userName = req.body.userFromFront;
    var password = req.body.passwordFromFront;
  
    var user = await userModel.findOne({ user : userName });
    if (user) {
      if (bcrypt.compareSync(password, user.password)) {
        req.session.user = {
          token: user.token,
        }
        res.redirect('/home');
      } else {
        res.redirect('/')
      }
    } else {
      res.redirect('/')
    }
  
  });

/* ROUTE LOGOUT */
router.get('/logout', function(req,res,next){
  req.session.user = null;
  res.redirect('/')
});

module.exports = router;
