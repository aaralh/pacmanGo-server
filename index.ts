
let express = require('express'),
  app = express(),
  port = process.env.PORT || 6565;

let routes = require('./routes/highScoreRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('PacmanGo server started on: ' + port);
