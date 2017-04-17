const express = require('express');
const bodyParser = require('body-parser');
const diskdb = require('diskdb');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (request, response) => {
  response.sendfile('index.html');
});

app.listen(3000);

diskdb.connect(`${__dirname}/public/Json`, ['articles', 'arrayIMG', 'Users']);

let user = null;

const Users = diskdb.Users.find();
app.post('/logIn', (require, response) => {
  let actualUser;
  if (actualUser = Users.find(p => p.username === require.body.username && p.password === require.body.password)) {
    user = actualUser.username;
  }
  response.end();
});

app.post('/logOut', (require, response) => {
  user = null;
  response.end();
});

app.get('/actualUser', (require, response) => {
  if (user === null) {
    response.status(400).send('Current user is not existed!');
  } else {
    response.send(user);
  }
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

