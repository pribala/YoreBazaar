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

