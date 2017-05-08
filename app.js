const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  name: 'login',
  secret: 'AgathaSecret',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
    url: 'mongodb://localhost/test',
  }),
}));

const passport = require('./passport');

app.use(passport.initialize());
app.use(passport.session({}));

app.use('/', require('./router'));

app.listen(process.env.PORT || 5000);
