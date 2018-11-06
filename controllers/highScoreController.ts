import { strict } from "assert";

const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "<user>",
  password: "<password>",
  database: "<database>"
});

interface addHighScoreReq {
  player: string,
  time: number,
  score: number,
  difficulty: number,
}

exports.getHighScores = function(req, res) {
  const sql = "SELECT * FROM highscores";
   con.query(sql, (err, result) => {
      res.json(result);
      res.end();
  });
};
  
  
  

exports.addHighScore = function(req, res) {
  let body = '';
  req.on('data', chunk => {
      body += chunk.toString(); // convert Buffer to string
  });
  req.on('end', () => {
      let bodyJson: addHighScoreReq = JSON.parse(body);
      const {player, time, score, difficulty} = bodyJson;
      if (player && time && score && difficulty) {
        const timestamp = Date.now()
        const sql = "INSERT INTO highscores (player, time, score, difficulty, timestamp) VALUES (?,?,?,?,?)";
        con.query(sql, [player, time, score, difficulty, timestamp], function (err, result) {
            if (err) throw err;
        });
      }
      res.end('ok');
  });
};
