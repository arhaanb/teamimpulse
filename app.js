var express = require('express');
// var mongoose = require('mongoose');
var bodyParser = require('body-parser');
// var passport = require('passport');
// var session = require('express-session');
// var MongoStore = require('connect-mongo')(session);
// var LocalStrategy = require('passport-local').Strategy;

var app = express();

// var MONGO_URL = "mongodb://dhruva:thegod1@ds161411.mlab.com:61411/minetx";
// //Make new databse

// mongoose.connect(MONGO_URL, (err, db) => {
//   if (err) {
//     return console.log(err);
//   }
// });
// var db = mongoose.connection;
// //If Mongo Error
// db.on('error', console.error.bind(console, 'connection error'));

// //Setting up sessions+cookies
// app.use(session({
//     secret: 'JagdishKumar',
//     resave: false,
//     saveUninitialized: false,
//     store: new MongoStore({
//       mongooseConnection: db
//     })
// }));

// app.use(passport.initialize());
// app.use(passport.session());

// var User = require('./models/user');
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.use((req, res, next) => {
//   res.locals.currentUser = req.user;
//   next();
// });

//Setting up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Setting public directory
app.use(express.static(__dirname + '/public'));

//Setting view engine
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

//Setting routes
var home = require('./routes/index');
app.use('/', home);

// var enigma = require('./routes/enigma');
// app.use('/enigma', enigma);

// var admin = require('./routes/admin');
// app.use('/admin', admin);

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
})

//Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error');
});

// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var xhr = new XMLHttpRequest();

// //Random Word Generator API Test
// var HttpClient = function () {
//   this.get = function (aUrl, aCallback) {
//       var anHttpRequest = new XMLHttpRequest();
//       anHttpRequest.onreadystatechange = function () {
//           if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
//               aCallback(anHttpRequest.responseText);
//       }

//       anHttpRequest.open("GET", aUrl, true);
//       anHttpRequest.send(null);
//   }
// }

// var client = new HttpClient();
// client.get('https://random-word-api.herokuapp.com/word?number=1', function (response) {
//   // do something with response
//   var ranWord = response.slice(2, -2);
//   console.log(ranWord)

// });



//Listening
app.listen(process.env.PORT || 5000);
