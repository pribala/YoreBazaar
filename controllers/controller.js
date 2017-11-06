var express = require("express");

var router = express.Router();

//Import the model (cat.js) to use its database functions.
//var items = require("../models/index.js");
var items=[{
image_url:"http://static3.businessinsider.com/image/54db578deab8ea3149fac3f7-809-606/valentines-day-romance-novel-8.png",
Label:"Novel",
Price:"21$"
},
{
  image_url:"http://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/04/26/Pictures/_e10abadc-2a73-11e7-a28f-c563b2540923.jpg",
  Label:"chethan bhagath Novel",
  Price:"12$"
  }]
//Create all our routes and set up logic within those routes where required.
router.get('/', function(req, res, next) {
    // res.render("shop/index", { title: 'Shopping Cart' });
    res.render("sample",{item:items});
  });
  

module.exports = router;