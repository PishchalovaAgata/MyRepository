const express = require('express');
const bodyParser = require('body-parser');
const diskdb = require('diskdb');
const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const expressSession = require('express-session');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession({
    name: 'login',
    secret: 'AgathaSecret',
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session({}));

app.get('/', (request, response) => {
  response.sendfile('index.html');
});

app.listen(3000);

let actualUser = null;

diskdb.connect(`${__dirname}/public/Json`, ['articles', 'arrayIMG', 'Users', 'sessions']);

app.post('/login', (req, res, next) => {
  console.log(req.username);
        passport.authenticate('login',
            (err, user, info) => {
                if (user) {
                    return req.logIn(user, () => {

                        res.send(user.username);
                        actualUser = user.username;

                    });
                }
                return res.end();
            }
        )(req, res, next);
    }
);

app.post('/logout', (req, res) => {
    req.logout();
    res.clearCookie('login');
    actualUser = null;
    res.end();
});

app.get('/user', function (request, response) {

  if( actualUser !== null){
    response.send( actualUser);
  } else
    response.status(401).end();
});



app.get('/articles', (require, response) => { response.send(diskdb.articles.find()); });
app.post('/articles', (require, response) => {
  diskdb.articles.remove();
  diskdb.loadCollections(['articles']);
  diskdb.articles.save(require.body);
  response.end();
});

app.get('/arrayIMG', (require, response) => { response.send(diskdb.arrayIMG.find()); });
app.post('/arrayIMG', (require, response) => {
  diskdb.arrayIMG.remove();
  diskdb.loadCollections(['arrayIMG']);
  diskdb.arrayIMG.save(require.body);
  response.end();
});






passport.serializeUser((user, done) => {
    const session = diskdb.sessions.find()[0] || {};
    diskdb.sessions.remove();
    diskdb.loadCollections(['sessions']);
    session[user.sessionID] = user;
    diskdb.sessions.save(session);
    done(null, user.sessionID);
});
passport.deserializeUser((sessionID, done) => {
    const user = diskdb.sessions.find()[0][sessionID];
    const err = user ? null : new Error('deserializing error');
    done(err, user.sessionID);
});
passport.use('login', new LocalStrategy(
    { passReqToCallback: true },
    (req, username, password, done) => {
      console.log("!!!!"+username+" "+password)
        const user = diskdb.Users.findOne({ username: username });
      console.log("!!!!!!!!!!!"+user);
        if (!user) {
            return done(null, false, { message: 'wrong user' });
        }
        if (password !== user.password) {
            return done(null, false, { message: 'wrong password.' });
        }
        user.sessionID = req.sessionID;
        return done(null, user);
    })
);

