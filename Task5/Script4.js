var ArticleService = (function () {
    var articles = [
        {
            id: '1',
            title: 'Это я автор налога для безработных',
            summary: 'В Минске появилось и исчезло граффити Это я автор налога для безработных',
            createdAt: new Date('2017-02-27T23:00:00'),
            author: 'Автор 1',
            content: 'В центре Минска появилась аппликация, на которой изображена член Совета Республики Марианна Щеткина, ранее — глава Министерства труда и социальной защиты Беларуси. Рядом с ее портретом в полный рост пояснение: «Это я автор налога для безработных». Фотографии творчества неизвестного уличного художника сделал блогер Антон Мотолько. Буквально через пару часов аппликация исчезла — ее оперативно закрасили коммунальные службы.'
        },
        {
            id: '2',
            title: 'Сирены на БелАЭС',
            summary: 'В Литве установят сирены на случай чрезвычайных ситуаций на БелАЭС',
            createdAt: new Date('2017-01-23T23:00:00'),
            author: 'Автор 2',
            content: 'Департамент пожарной безопасности и спасения (ДПБС) намерен оборудовать на юго-востоке Литвы предупредительные сирены, которые бы информировали население о возможной опасности в случае инцидентов на Островецкой АЭС в Беларуси, сообщает DELFI.'
        },
        {
            id: '3',
            title: 'На платформе умер мужчина',
            summary: 'На платформе станции метро "Институт культуры" умер мужчина',
            createdAt: new Date('2014-02-14T23:00:00'),
            author: 'Автор 1',
            content: 'Утром 5 марта на платформе станции 67-летнему мужчине стало плохо. Бригада из БСМП прибыла на вызов через несколько минут. Медики полчаса пытались реанимировать мужчину, но, к сожалению, в 10.30 были вынуждены констатировать смерть.'
        },
        {
            id: '4',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-04-27T23:00:00'),
            author: 'Иванов Иван',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
        },
        {
            id: '5',
            title: 'Это я автор налога для безработных',
            summary: 'В Минске появилось и исчезло граффити Это я автор налога для безработных',
            createdAt: new Date('2017-02-27T23:00:00'),
            author: 'Автор 1',
            content: 'В центре Минска появилась аппликация, на которой изображена член Совета Республики Марианна Щеткина, ранее — глава Министерства труда и социальной защиты Беларуси. Рядом с ее портретом в полный рост пояснение: «Это я автор налога для безработных». Фотографии творчества неизвестного уличного художника сделал блогер Антон Мотолько. Буквально через пару часов аппликация исчезла — ее оперативно закрасили коммунальные службы.'
        },
        {
            id: '6',
            title: 'Сирены на БелАЭС',
            summary: 'В Литве установят сирены на случай чрезвычайных ситуаций на БелАЭС',
            createdAt: new Date('2017-01-23T23:00:00'),
            author: 'Автор 2',
            content: 'Департамент пожарной безопасности и спасения (ДПБС) намерен оборудовать на юго-востоке Литвы предупредительные сирены, которые бы информировали население о возможной опасности в случае инцидентов на Островецкой АЭС в Беларуси, сообщает DELFI.'
        },
        {
            id: '7',
            title: 'На платформе умер мужчина',
            summary: 'На платформе станции метро "Институт культуры" умер мужчина',
            createdAt: new Date('2014-02-14T23:00:00'),
            author: 'Автор 1',
            content: 'Утром 5 марта на платформе станции 67-летнему мужчине стало плохо. Бригада из БСМП прибыла на вызов через несколько минут. Медики полчаса пытались реанимировать мужчину, но, к сожалению, в 10.30 были вынуждены констатировать смерть.'
        },
        {
            id: '8',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-04-27T23:00:00'),
            author: 'Иванов Иван',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
        },
        {
            id: '9',
            title: 'Это я автор налога для безработных',
            summary: 'В Минске появилось и исчезло граффити Это я автор налога для безработных',
            createdAt: new Date('2017-02-27T23:00:00'),
            author: 'Автор 1',
            content: 'В центре Минска появилась аппликация, на которой изображена член Совета Республики Марианна Щеткина, ранее — глава Министерства труда и социальной защиты Беларуси. Рядом с ее портретом в полный рост пояснение: «Это я автор налога для безработных». Фотографии творчества неизвестного уличного художника сделал блогер Антон Мотолько. Буквально через пару часов аппликация исчезла — ее оперативно закрасили коммунальные службы.'
        },
        {
            id: '10',
            title: 'Сирены на БелАЭС',
            summary: 'В Литве установят сирены на случай чрезвычайных ситуаций на БелАЭС',
            createdAt: new Date('2017-01-23T23:00:00'),
            author: 'Автор 2',
            content: 'Департамент пожарной безопасности и спасения (ДПБС) намерен оборудовать на юго-востоке Литвы предупредительные сирены, которые бы информировали население о возможной опасности в случае инцидентов на Островецкой АЭС в Беларуси, сообщает DELFI.'
        },
        {
            id: '11',
            title: 'На платформе умер мужчина',
            summary: 'На платформе станции метро "Институт культуры" умер мужчина',
            createdAt: new Date('2014-02-14T23:00:00'),
            author: 'Автор 1',
            content: 'Утром 5 марта на платформе станции 67-летнему мужчине стало плохо. Бригада из БСМП прибыла на вызов через несколько минут. Медики полчаса пытались реанимировать мужчину, но, к сожалению, в 10.30 были вынуждены констатировать смерть.'
        },
        {
            id: '12',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-08-27T23:00:00'),
            author: 'Иванов Иван',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
        },
        {
            id: '13',
            title: 'Это я автор налога для безработных',
            summary: 'В Минске появилось и исчезло граффити Это я автор налога для безработных',
            createdAt: new Date('2017-02-27T23:00:00'),
            author: 'Любава',
            content: 'В центре Минска появилась аппликация, на которой изображена член Совета Республики Марианна Щеткина, ранее — глава Министерства труда и социальной защиты Беларуси. Рядом с ее портретом в полный рост пояснение: «Это я автор налога для безработных». Фотографии творчества неизвестного уличного художника сделал блогер Антон Мотолько. Буквально через пару часов аппликация исчезла — ее оперативно закрасили коммунальные службы.'
        },
        {
            id: '14',
            title: 'Сирены на БелАЭС',
            summary: 'В Литве установят сирены на случай чрезвычайных ситуаций на БелАЭС',
            createdAt: new Date('2017-08-23T23:00:00'),
            author: 'Автор 2',
            content: 'Департамент пожарной безопасности и спасения (ДПБС) намерен оборудовать на юго-востоке Литвы предупредительные сирены, которые бы информировали население о возможной опасности в случае инцидентов на Островецкой АЭС в Беларуси, сообщает DELFI.'
        },
        {
            id: '15',
            title: 'На платформе умер мужчина',
            summary: 'На платформе станции метро "Институт культуры" умер мужчина',
            createdAt: new Date('2014-02-14T23:00:00'),
            author: 'Виталий Рок',
            content: 'Утром 5 марта на платформе станции 67-летнему мужчине стало плохо. Бригада из БСМП прибыла на вызов через несколько минут. Медики полчаса пытались реанимировать мужчину, но, к сожалению, в 10.30 были вынуждены констатировать смерть.'
        },
        {
            id: '16',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2016-07-28T23:00:00'),
            author: 'Светлана Алексеева',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
        },
        {
            id: '17',
            title: 'Это я автор налога для безработных',
            summary: 'В Минске появилось и исчезло граффити Это я автор налога для безработных',
            createdAt: new Date('2017-02-27T23:00:00'),
            author: 'Алексей Алексеев',
            content: 'В центре Минска появилась аппликация, на которой изображена член Совета Республики Марианна Щеткина, ранее — глава Министерства труда и социальной защиты Беларуси. Рядом с ее портретом в полный рост пояснение: «Это я автор налога для безработных». Фотографии творчества неизвестного уличного художника сделал блогер Антон Мотолько. Буквально через пару часов аппликация исчезла — ее оперативно закрасили коммунальные службы.'
        },
        {
            id: '18',
            title: 'Сирены на БелАЭС',
            summary: 'В Литве установят сирены на случай чрезвычайных ситуаций на БелАЭС',
            createdAt: new Date('2014-01-47T23:00:00'),
            author: 'Снежок',
            content: 'Департамент пожарной безопасности и спасения (ДПБС) намерен оборудовать на юго-востоке Литвы предупредительные сирены, которые бы информировали население о возможной опасности в случае инцидентов на Островецкой АЭС в Беларуси, сообщает DELFI.'
        },
        {
            id: '19',
            title: 'На платформе умер мужчина',
            summary: 'На платформе станции метро "Институт культуры" умер мужчина',
            createdAt: new Date('2012-07-14T23:00:00'),
            author: 'Игорь Игоревич',
            content: 'Утром 5 марта на платформе станции 67-летнему мужчине стало плохо. Бригада из БСМП прибыла на вызов через несколько минут. Медики полчаса пытались реанимировать мужчину, но, к сожалению, в 10.30 были вынуждены констатировать смерть.'
        },
        {
            id: '20',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-04-27T23:00:00'),
            author: 'Иванов Иван',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
        }
    ];

    var arrayIMG = [
        {id: '1', url : "1.jpg"},
        {id: '2', url : "1.jpg"},
        {id: '3', url : "1.jpg"},
        {id: '4', url : "1.jpg"},
        {id: '5', url : "1.jpg"},
        {id: '6', url : "1.jpg"},
        {id: '7', url : "1.jpg"},
        {id: '8', url : "1.jpg"},
        {id: '9', url : "1.jpg"},
        {id: '10', url : "1.jpg"},
        {id: '11', url : "1.jpg"},
        {id: '12', url : "1.jpg"},
        {id: '13', url : "1.jpg"},
        {id: '14', url : "1.jpg"},
        {id: '15', url : "1.jpg"},
        {id: '16', url : "1.jpg"},
        {id: '17', url : "1.jpg"},
        {id: '18', url : "1.jpg"},
        {id: '19', url : "1.jpg"},
        {id: '20', url : "1.jpg"}
    ];
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
        if (typeof article.id !== 'string' || article.id.length <= 0 || getArticle(article.id) !== undefined)
            return false;
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
            getArticle(id).title = _article.title;
            getArticle(id).summary = _article.summary;
            getArticle(id).content = _article.content;
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
        getIMG(id).url = url;
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
            editIMG :editIMG
        };
}());


var DOMService = (function () {

    var user = " Пищалова Агата ";
    var dataFiltration = {};
    var amountOfActualNews = 0;
    var dateNormal = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

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
        /*куда вставляем*/
        var array = ArticleService.getArticles(amountOfActualNews, amountOfActualNews + 7, dataFiltration);
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
            copy.firstElementChild.getElementsByClassName("date-of-the-post")[0].innerHTML = array[i].createdAt.toLocaleString('en', dateNormal);
            copy.firstElementChild.getElementsByClassName("image-for-the-news")[0].firstElementChild.src = url;
            var string = copy.firstElementChild.getElementsByTagName("p")[0].innerHTML;
            copy.firstElementChild.getElementsByTagName("p")[0].innerHTML = array[i].summary + string;
            bodyNews.appendChild(copy);
        }
        amountOfActualNews += 7;
    }

    function removeArticle(id) {
        if (ArticleService.getArticle(id)) {
            ArticleService.removeArticle(id);
            var bodyNews = document.getElementsByClassName("body-news")[0];
            bodyNews.removeChild(document.getElementById(id));
        }
    }

    function clearBodyNews() {
        var bodyNews = document.getElementsByClassName("body-news")[0];
        var a = bodyNews.children.length;
        for (var i = 0; i < a; i++) {
            bodyNews.removeChild(bodyNews.firstElementChild);
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
            console.log("jkl")
            ArticleService.editIMG(id, url);
            amountOfActualNews = 0;
            clearBodyNews();
            Initialization();
        }
    }

    function filteration(article) {
        dataFiltration = article;
        amountOfActualNews = 0;
        clearBodyNews();
        Initialization();
    }

    return {
        Initialization : Initialization,
        removeArticle : removeArticle,
        clearBodyNews : clearBodyNews,
        addArticle : addArticle,
        editArticle : editArticle,
        filteration : filteration
    };

}());











