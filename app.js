var express =require("express");
var app = express();
app.use(express.static("public"));
app.get('/', function (request,response) {
    response.sendfile('public/index.html');

})
app.listen(3000);
