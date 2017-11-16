router.get('/quiz/:id/results', function(req, res) {
  var quizId = req.params.id;
  console.log('QUIZ ID' + quizId);
  var userId = req.user ? req.user.id : "1";
  var quizResults;
  Models.Quiz.findOne({
    where: { id: quizId },
    include: [{
      model: Models.UserQuiz,
      where: { user_id: userId, quiz_id: quizId }
    }, {
      model: Models.Question,
    }, {
      model: Models.Category,
      through: Models.QuizCategory,
    }, {
      model: Models.Post,
      // where: { quiz_id: quizId }
    }]
  }).then((results) => {
    quizResults = {
      a: results,
    };
    Models.Post.findAll({
      where: { quiz_id: quizId },
      include: {
        model: Models.User
      }
    }).then(function(postResults) {
      quizResults.b = postResults;
      res.json(quizResults);
    });
  });
});


.then(carts => {
      const resObj = carts.map(cart => {

        //tidy up the user data
        return Object.assign(
          {},
          {
            id: cart.id,
            quantity: cart.quantity,
            products: cart.product_id.map(product => {
        //tidy up the comment data
                    return Object.assign(
                      {},
                      {
                        id: product.id,
                        product_name: product.product_name,
                        product_image: product.product_image,
                        price: product.price
                      
                      })
                })
        })})
            res.json(resObj);
        })
  })

  app.get("/cart/:profile_id", function(req, res) {
    // findAll returns all entries for a table when used with no options
    var query = {};
    if (req.params.profile_id) {
      query.ProfileProfileId = req.params.profile_id;
    }
    console.log(req.params.profile_id);
    db.Cart.findAll({
      where: query,
        include:[{model:db.Profile},
         {
      model: db.Product,
      through: db.CartProduct}]
    }).then(function(dbCart) {
      //We have access to the products as an argument inside of the callback function

      var hbsObject = {
        products: dbCart
      };
      console.log(dbCart);
      res.render("shop/cart", hbsObject);
    });

  });