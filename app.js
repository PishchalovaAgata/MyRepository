var express =require("express"),
    fs = require("fs"),
    bodyParser = require("body-parser"),
    diskdb = require("diskdb");
var app = express();
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', function (request,response) {
    response.sendfile('index.html');
});
app.listen(3000);
var articles,arrayIMG, Users;
diskdb.connect(__dirname + "/public/Json", ["articles", "arrayIMG", "Users"]);

var user = null;

Users = diskdb.Users.find();
app.post("/logIn", function (require, response) {
    var actualUser;
    if(actualUser = Users.find(p => p.username === require.body.username && p.password === require.body.password)){
        user = actualUser.username;
    }
});

app.post("/logOut", function (require, response) {
    user = null;
});

app.get("/actualUser", function (require, response) {
    if(user === null){
        response.status(400).send("Current user is not existed!");
    }
    else{
        response.send(user);
    }
});



app.get("/articles", (require, response)=> {response.send(diskdb.articles.find());});
app.post("/articles", (require,response)=> {
    diskdb.articles.remove();
    diskdb.loadCollections(["articles"]);
    diskdb.articles.save(require.body);
});

app.get("/arrayIMG", (require, response)=> {response.send(diskdb.arrayIMG.find());});
app.post("/arrayIMG", (require,response)=> {
    diskdb.arrayIMG.remove();
    diskdb.loadCollections(["arrayIMG"]);
    diskdb.arrayIMG.save(require.body);
});







