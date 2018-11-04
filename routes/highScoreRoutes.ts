module.exports = function(app) {
  let highScoreController = require('../controllers/highScoreController');

  // Highscore Routes.
  app.route('/highscore')
    .get(highScoreController.getHighScores)
    .post(highScoreController.addHighScore);
};