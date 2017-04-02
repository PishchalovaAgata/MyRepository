var ArticleService = (function () {

    var articles;
    var xhr = new XMLHttpRequest();
    var getArticlesDiskDB=function () {
        xhr.open('GET', './articles', false);
        xhr.send();
        if(xhr.status != 200){
            alert('Error ' + xhr.status()+ ' : '+ xhr.statusText);
        }
        else {
            articles=(JSON.parse(xhr.responseText,(key,value)=>{
                    if(key=='createdAt') return new Date(value);
                    else return value;
                }));
        }
    };
    getArticlesDiskDB();
    var arrayIMG;
    var getArrayIMGDiskDB=function () {
        xhr.open('GET', './arrayIMG', false);
        xhr.send();
        if(xhr.status != 200){
            alert('Error ' + xhr.status()+ ' : '+ xhr.statusText);
        }
        else {
            arrayIMG=(JSON.parse(xhr.responseText));
        }
    };
    getArrayIMGDiskDB();


    function getArticles(skip, top, filterConfiguration) {
        skip = skip || 0;
        top = top || 19;
        if (filterConfiguration !== undefined) {
            var _author = filterConfiguration.author || "";
            var _dateBegin = filterConfiguration.dateBegin || new Date(-8640000000000000);
            var _dateEnd = filterConfiguration.dateEnd || new Date(8640000000000000);
        }
        var _articles = articles;
        if (filterConfiguration !== undefined) {
            _articles = _articles.filter(function (a) {
                return a.author.indexOf(_author) > -1;
            });
            _articles = _articles.filter(function (a) {
                return a.createdAt >= _dateBegin && a.createdAt <= _dateEnd;
            });
        }
        _articles = _articles.sort(function (a, b) {
            return b.createdAt - a.createdAt;
        });
        return _articles.slice(skip, skip + top);
    }

    function getArticle(id) {
        if (id === undefined) {
            return undefined;
        }
        for (var i = 0; i < articles.length; i++) {
            if (articles[i].id == id) return articles[i];
        }
    }

    function validateArticle(article) {
        if (typeof article.title !== 'string' || article.title.length <= 0 || article.title.length > 100) {
            return false;

        }
        if (typeof article.summary !== 'string' || article.summary.length <= 0 || article.summary.length > 200) {
            return false;
        }
        if ((article.createdAt instanceof Date) === false) {
            return false;
        }
        if (typeof article.author !== 'string' || article.author.length <= 0) {
            return false;
        }
        if (typeof article.content !== 'string' || article.content.length <= 0) {
            return false;
        }
        if (typeof article.id !== 'string' || article.id.length <= 0 || getArticle(article.id) !== undefined){
            return false;
        }

        return true;
    }

    function validateArticleForEdit(article) {
        if (typeof article.title !== 'string' || article.title.length <= 0 || article.title.length > 100)
            return false;
        if (typeof article.summary !== 'string' || article.summary.length <= 0 || article.summary.length > 200)
            return false;
        if ((article.createdAt instanceof Date) === false)
            return false;
        if (typeof article.author !== 'string' || article.author.length <= 0)
            return false;
        if (typeof article.content !== 'string' || article.content.length <= 0)
            return false;
        return true;
    }

    function addArticle(article) {
        if (validateArticle(article) === false) {
            return false;
        }
        articles.push(article);
        return true;
    }

    function editArticle(id, article) {
        var _article;
        var _extra;
        if ((_extra = getArticle(id)) === undefined)
            return false;
        _article = Object.assign(_extra);
        if (article.title !== undefined)
            _article.title = article.title;
        if (article.summary !== undefined)
            _article.summary = article.summary;
        if (article.content !== undefined)
            _article.content = article.content;
        if (validateArticleForEdit(_article) === true) {
            removeArticle(id);
            addArticle(_article);
            console.log(_article);
            return true;
        }
        return false;
    }

    function removeArticle(id) {
        var index;
        for (var i = 0; i < articles.length; i++) {
            if (articles[i].id == id) index = i;
        }
        if (index !== undefined) {
            articles.splice(index, 1);
            return true;
        }
        return false;
    }

    function getIMG(id) {
        for(var i = 0; i < arrayIMG.length; i++){
            if(arrayIMG[i].id === id){
                return arrayIMG[i].url;
            }
        }
    }

    function addIMG(articleIMG) {
        arrayIMG.push(articleIMG);
    }

    function editIMG(id, url) {
        if(getIMG(id) === undefined){
            return;
        }
        arrayIMG.find((param)=>{return param.id===id}).url=url;
    }

    function toLocal() {
        xhr.open ("POST", "/articles", true);
        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        xhr.send(JSON.stringify(articles));
        xhr.open ("POST", "/arrayIMG", true);
        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        xhr.send(JSON.stringify(arrayIMG));
    }

        return {
            getArticles : getArticles,
            addArticle : addArticle,
            getArticle : getArticle,
            editArticle: editArticle,
            removeArticle : removeArticle,
            validateArticle : validateArticle,
            validateArticleForEdit : validateArticleForEdit,
            getIMG : getIMG,
            addIMG : addIMG,
            editIMG :editIMG,
            toLocal:toLocal
        };
}());



var DOMService = (function () {

    var xhr = new XMLHttpRequest();
    var user = "";
    var dataFiltration = {};
    var amountOfActualNews = 0;
    var dateNormal = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit'
    }
    var Users = [
        {
            username: "admin",
            password: "1234"
        },
        {
            username: "user1",
            password: "1111"
        }
    ];

    function Initialization() {
        if (user.length <= 0) {
            document.getElementsByClassName("demo")[0].children[2].style.display = "none";
            document.getElementsByClassName("demo")[0].children[3].style.display = "none";
            document.getElementsByClassName("demo")[0].children[4].style.display = "";
            document.getElementsByClassName("User-Name")[0].innerHTML = "";
        } else {

            document.getElementsByClassName("User-Name")[0].innerHTML = "Имя пользователя: " + user;
            document.getElementsByClassName("demo")[0].children[2].style.display = "";
            document.getElementsByClassName("demo")[0].children[3].style.display = "";
            document.getElementsByClassName("demo")[0].children[4].style.display = "none";
        }

        var bodyNews = document.getElementsByClassName("body-news")[0];
        var array = ArticleService.getArticles(amountOfActualNews,7, dataFiltration);
        for (var i = 0; i < array.length; i++) {
            var url = ArticleService.getIMG(array[i].id);
            var data = document.getElementById("news-template");
            var copy = data.content.cloneNode(true);
            if (user.length <= 0) {
                copy.firstElementChild.getElementsByClassName("tick")[0].style.display = "none";
                copy.firstElementChild.getElementsByClassName("cross")[0].style.display = "none";
            }
            copy.firstElementChild.id = array[i].id;
            copy.firstElementChild.getElementsByTagName("h1")[0].innerHTML = array[i].title;
            copy.firstElementChild.getElementsByClassName("author-of-the-news")[0].innerHTML = array[i].author;
            copy.firstElementChild.getElementsByClassName("date-of-the-post")[0].innerHTML = array[i].createdAt.toLocaleString('ru', dateNormal);
            copy.firstElementChild.getElementsByClassName("image-for-the-news")[0].firstElementChild.src = url;
            var string = copy.firstElementChild.getElementsByTagName("p")[0].innerHTML;
            copy.firstElementChild.getElementsByTagName("p")[0].innerHTML = array[i].summary + string;
            bodyNews.appendChild(copy);
        }
        amountOfActualNews += array.length;

        if(ArticleService.getArticles(0, 1000000000, dataFiltration).length === amountOfActualNews){
            document.getElementsByClassName("Load-more")[0].style.display = 'none';
        }else {
            document.getElementsByClassName("Load-more")[0].style.display = '';
        }
    }

    function clearBodyNews() {
        var bodyNews = document.getElementsByClassName("body-news")[0];
        var a = bodyNews.children.length;
        for (var i = 0; i < a; i++) {
            bodyNews.removeChild(bodyNews.firstElementChild);
        }
    }

    function removeArticle(id) {
        if (ArticleService.getArticle(id)) {
            ArticleService.removeArticle(id);
            var bodyNews = document.getElementsByClassName("body-news")[0];
            bodyNews.removeChild(document.getElementById(id));
            ArticleService.toLocal();
        }
    }

    function addArticle(article, url) {
        if (ArticleService.addArticle(article)) {
            ArticleService.addIMG({id: article.id, url: url});
            amountOfActualNews = 0;
            clearBodyNews();
            Initialization();
        }
    }

    function editArticle(id, _article, url) {
        if (ArticleService.editArticle(id, _article)) {
            ArticleService.editIMG(id, url);
            amountOfActualNews = 0;
            clearBodyNews();
            Initialization();
        }
    }

    function filtration(article) {
        dataFiltration = article;
        amountOfActualNews = 0;
        clearBodyNews();
        Initialization();
    }

    var documentGOOD =()=>{
        document.getElementsByClassName("body-news")[0].addEventListener('click', defineClass);
        document.getElementsByClassName("menu")[0].addEventListener('click', defineClass);
        xhr.open("GET", "./actualUser", false);
        xhr.send();
        if(xhr.status === 200){
            user = xhr.responseText;
        }
        Initialization();
    };

    function defineClass(event){
        if(event.target.id === 'news-template-tick' ){
            clickTick(event.target);
        }
        else if(event.target.id === 'edit-btn-form' ){
            readDataFromEditForm();
        }
        else if(event.target.id === 'news-template-cross' ){
            clickCross(event.target);
        }
        else if(event.target.id === 'news-template-add-news' ){
            clickAddNews();
        }
        else if(event.target.id === 'newNews-btn-form' ){
            readDataFromNewNEWSForm();
        }
        else if (event.target.id === 'btn-filtration-form'){
            readDataFromFiltrationForm();
        }
        else if (event.target.id === 'btn-clean-form'){
            cleanFiltrationForm();
        }
        else if (event.target.id === 'read-more'){
            clickReadMore(event.target);
        }
        else if(event.target.id === 'main-page'){
            location.reload();
            clearBodyNews();
            amountOfActualNews=0;
            Initialization();
            document.getElementsByClassName("demo")[0].children[0].style.display = "";
        }
        else if(event.target.id === 'quit-btn'){
            clicklogOut();
        }
        else if(event.target.id === 'login-send-btn'){
            clickLogIn();
        }
    }

    document.addEventListener("DOMContentLoaded", documentGOOD);

    function clickTick(elem) {
        clearBodyNews();
        var article = ArticleService.getArticle(elem.parentNode.parentNode.id);
        var bodyNews = document.getElementsByClassName("body-news")[0];
        var data = document.getElementById("edit-form");
        var copy = data.content.cloneNode(true);
        bodyNews.appendChild(copy);
        document.getElementById("edit-nameOfTheNews").value = article.title;
        document.getElementById("edit-summaryOfTheNews").value = article.summary;
        document.getElementById("edit-contentOFTheNews").value = article.content;
        document.getElementById("edit-authorOfTheNews").value =user;
        document.getElementById("edit-dateOfTheNews").value = new Date();
        document.getElementById("edit-imageOfTheNews").value =ArticleService.getIMG(article.id);
        document.getElementById("edit-id").value =article.id;
        document.getElementsByClassName("Load-more")[0].style.display = 'none';
    }

    function readDataFromEditForm() {
        var dataObject ={};
        dataObject.title = document.getElementById("edit-nameOfTheNews").value;
        dataObject.summary = document.getElementById("edit-summaryOfTheNews").value;
        dataObject.content = document.getElementById("edit-contentOFTheNews").value;
        var dataURL = document.getElementById("edit-imageOfTheNews").value;
        dataObject.id = document.getElementById("edit-id").value;
        if(ArticleService.editArticle(dataObject.id,dataObject) && dataURL.length > 0){
            ArticleService.getArticle(dataObject.id).createdAt = new Date();
            ArticleService.editIMG(dataObject.id, dataURL);
            clearBodyNews();
            amountOfActualNews =0;
            Initialization();
            ArticleService.toLocal();
        }
    }

    function clickCross(elem) {
        document.body.style.overflow ='hidden';
        removeArticle(elem.parentNode.parentNode.id);
        document.body.style.overflow ='';
    }

    function clickAddNews() {
        clearBodyNews();
        var article;
        var bodyNews = document.getElementsByClassName("body-news")[0];
        var data = document.getElementById("newNews-form");
        var copy = data.content.cloneNode(true);
        bodyNews.appendChild(copy);
        var id = Math.random()*1000000;
        document.getElementById("newNews-id").value = id;
        document.getElementById("newNews-authorOfTheNews").value = user;
        document.getElementById("newNews-dateOfTheNews").value =new Date();
        document.getElementsByClassName("Load-more")[0].style.display = 'none';

    }

    function readDataFromNewNEWSForm() {
        var dataObject ={};
        dataObject.title = document.getElementById("newNews-nameOfTheNews").value;
        dataObject.summary = document.getElementById("newNews-summaryOfTheNews").value;
        dataObject.id = document.getElementById("newNews-id").value;
        dataObject.author = document.getElementById("newNews-authorOfTheNews").value;
        dataObject.createdAt = new Date();
        dataObject.content = document.getElementById("newNews-contentOFTheNews").value;
        var dataURL = document.getElementById("newNews-imageOfTheNews").value;
        if(ArticleService.addArticle(dataObject) && dataURL.length > 0){
            ArticleService.addIMG({id:dataObject.id, url:dataURL});
            clearBodyNews();
            amountOfActualNews = 0;
            Initialization();
            ArticleService.toLocal();
        }
        else{
            alert("WRONG");
        }
    }

    function readDataFromFiltrationForm(){
        dataFiltration.dateEnd = new Date(document.getElementById("filtration-date-to").value);
        dataFiltration.dateBegin = new Date(document.getElementById("filtration-date-from").value);
        dataFiltration.author = document.getElementById("filtration-author").value;
        if(isNaN(dataFiltration.dateBegin)){
            dataFiltration.dateBegin = undefined;
        }
        if(isNaN(dataFiltration.dateEnd)){
            dataFiltration.dateEnd = undefined;
        }
        if(dataFiltration.author.length<=0){
            dataFiltration.author = undefined;
        }

        if(ArticleService.getArticles(0, 1000000000, dataFiltration).length === 0 || dataFiltration.length === 0){
            clearBodyNews();
            var bodyNews = document.getElementsByClassName("body-news")[0];
            var data = document.getElementById("error-window");
            var copy = data.content.cloneNode(true);
            bodyNews.appendChild(copy);
            document.getElementsByClassName("Load-more")[0].style.display = 'none';
        }
        else {
            clearBodyNews();
            amountOfActualNews = 0;
            Initialization();
        }
    }

    function cleanFiltrationForm(){
        document.getElementById("filtration-date-to").value = "";
        document.getElementById("filtration-author").value = "";
        document.getElementById("filtration-date-from").value = "";
        dataFiltration =undefined;
    }

    function clickReadMore(elem) {
        clearBodyNews();
        var article = ArticleService.getArticle(elem.parentNode.parentNode.parentNode.id);
        var bodyNews = document.getElementsByClassName("body-news")[0];
        var data = document.getElementById("template-detail-news");
        var copy = data.content.cloneNode(true);
        console.log(article);
        copy.firstElementChild.getElementsByTagName("h1")[0].innerHTML = article.title;
        copy.firstElementChild.getElementsByClassName("author-of-the-news")[0].innerHTML = article.author;
        copy.firstElementChild.getElementsByClassName("date-of-the-post")[0].innerHTML = article.createdAt.toLocaleString('en', dateNormal);
        copy.firstElementChild.getElementsByClassName("image-for-the-news")[0].firstElementChild.src = ArticleService.getIMG(article.id);
        copy.firstElementChild.getElementsByTagName("p")[0].innerHTML = article.content;
        bodyNews.appendChild(copy);
        document.getElementsByClassName("Load-more")[0].style.display = 'none';
        document.getElementsByClassName("demo")[0].children[0].style.display = "none";
    }

    function clicklogOut(){
        xhr.open("POST", "./logOut", true);
        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        xhr.send();
        user = null;
        location.reload();
    }


    function clickLogIn() {
        var name = document.getElementById("login-name").value;
        var password = document.getElementById("login-password").value;
        var body = { username: name, password: password};
            xhr.open("POST", "./logIn", true);
            xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            xhr.send(JSON.stringify(body));
            xhr.open("GET", "./actualUser", false);
        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            xhr.send();
            if(xhr.status === 200){
                user = xhr.responseText;
                location.reload();
            }
            else{
                alert(xhr.responseText);
            }
    }

}());