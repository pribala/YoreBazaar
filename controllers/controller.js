var express = require("express");

var router = express.Router();

//Import the model (cat.js) to use its database functions.
//var items = require("../models/index.js");
var items = [
  {
    image_url: "http://static3.businessinsider.com/image/54db578deab8ea3149fac3f7-809-606/valentines-day-romance-novel-8.png",
    Label: "Novel",
    Price: "21$"
  },
  {
    image_url: "http://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/04/26/Pictures/_e10abadc-2a73-11e7-a28f-c563b2540923.jpg",
    Label: "chethan bhagath Novel",
    Price: "12$"
  },{
    image_url: "https://images.gr-assets.com/books/1470082995l/29056083.jpg",
    Label: "The Cursed Child",
    Price: "43$"
  }, 
  {
    image_url: "https://wellcomebookprize.org/sites/default/files/styles/book_main/public/Kalanithi%20flat.png?itok=cBg6ptiC",
    Label: "When Breath Becomes Air ",
    Price: "28$"
  }, 
  {
    image_url: "https://images-na.ssl-images-amazon.com/images/I/518ec-hoKML._SY445_QL70_.jpg",
    Label: "Truly Madly Guilty ",
    Price: "13$"
  }, 
  {
    image_url: "https://i.pinimg.com/236x/96/c4/d2/96c4d2a64618ac79d13ffd6b4a6ba40d--lady-midnight-cassandra-clare-cassandra-clare-books.jpg",
    Label: "Lady Midnight",
    Price: "20$"
  }, 
]
//Create all our routes and set up logic within those routes where required.
router.get('/', function (req, res, next) {
  // res.render("shop/index", { title: 'Shopping Cart' });
  res.render("shop/index", { item: items });
});


module.exports = router;