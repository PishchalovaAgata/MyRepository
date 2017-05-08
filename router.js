const express = require('express');
const passport = require('./passport');

const Article = require('./articleModel').Article;

let currentMaxSize = 0;
const router = express.Router();

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});
router.post('/logout', (req, res) => {
  req.logout();
  res.clearCookie('login');
  res.end();
});
router.get('/user', (req, res) => {
  if (req.user) res.send(req.user.username);
  else res.sendStatus(401).end();
});


router.post('/articles', (req, res) => {
  Article.findArticles(req.body).then(
        (response) => {
          Article.countArticles(req.body).then(
                (response) => {
                  currentMaxSize = response;
                },
                error => console.log(`Some error in MongoDB: ${error}`)
            );
          res.send(response);
        },
        error => console.log(`Some error in MongoDB: ${error}`)
    );
});
router.get('/maxSize', (req, res) => {
  res.send(JSON.stringify(currentMaxSize));
});
router.post('/article', (req, res) => {
  Article.findById(req.body.id).then(
        (response) => {
          res.send(response);
        },
        error => console.log(`Some error in MongoDB: ${error}`)
    );
});
router.post('/removeArticle', (req, res) => {
  if (req.isAuthenticated()) {
    Article.deleteById(req.body.id).then(
        (response) => {
          res.end();
        },
        error => console.log(`Some error in MongoDB: ${error}`)
    );
  } else res.status(401).end();
});
router.post('/createArticle', (req, res) => {
  if (req.isAuthenticated()) {
    const article = new Article(req.body.dataObject);
    article.save()
        .then(
            (response) => {
              res.end();
            },
            error => console.log(`Some error in MongoDB: ${error}`)
        );
  } else res.status(401).end();
});
router.post('/updateArticle', (req, res) => {
  if (req.isAuthenticated()) {
    Article.updateById(req.body.dataObject).then(
        (response) => {
          res.end();
        },
        error => console.log(`Some error in MongoDB: ${error}`)
    );
  } else res.status(401).end();
});
router.get('/', (req, res) => {
  res.sendfile('public/index.html');
});

module.exports = router;
