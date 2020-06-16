var express = require('express');
var app = express();

//Setting public directory
app.use(express.static(__dirname + '/public'));

//Setting view engine
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

//Setting routes
var home = require('./routes/index');
app.use('/', home);



//404
app.use((res, req, next) => {
  next(err);
});

app.all('/*', function (req, res, next) {
  if (req.headers.host.match(/^www/) !== null) {
    res.redirect('http://' + req.headers.host.replace(/^www\./, '') + req.url);
  } else {
    next();
  }
});

//Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('index');
});

//Listening
PORT = process.env.PORT || 6900

app.listen(PORT, console.log('App is running at port ' + PORT));