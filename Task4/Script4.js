var articles = [
    {
        id: '1',
        title: 'Это я автор налога для безработных',
        summary: 'В Минске появилось и исчезло граффити Это я автор налога для безработных',
        createdAt: new Date('2017-02-27T23:00:00'),
        author: 'Автор 1',
        tags:["minsk", "good"],
        content: 'В центре Минска появилась аппликация, на которой изображена член Совета Республики Марианна Щеткина, ранее — глава Министерства труда и социальной защиты Беларуси. Рядом с ее портретом в полный рост пояснение: «Это я автор налога для безработных». Фотографии творчества неизвестного уличного художника сделал блогер Антон Мотолько. Буквально через пару часов аппликация исчезла — ее оперативно закрасили коммунальные службы.'
    },
    {
        id: '2',
        title: 'Сирены на БелАЭС',
        summary: 'В Литве установят сирены на случай чрезвычайных ситуаций на БелАЭС',
        createdAt: new Date('2017-01-23T23:00:00'),
        author: 'Автор 2',
        tags:["music","belarus","plant"],
        content: 'Департамент пожарной безопасности и спасения (ДПБС) намерен оборудовать на юго-востоке Литвы предупредительные сирены, которые бы информировали население о возможной опасности в случае инцидентов на Островецкой АЭС в Беларуси, сообщает DELFI.'
    },
    {
        id: '3',
        title: 'На платформе умер мужчина',
        summary: 'На платформе станции метро "Институт культуры" умер мужчина',
        createdAt: new Date('2014-02-14T23:00:00'),
        author: 'Автор 1',
        tags:["death"],
        content: 'Утром 5 марта на платформе станции 67-летнему мужчине стало плохо. Бригада из БСМП прибыла на вызов через несколько минут. Медики полчаса пытались реанимировать мужчину, но, к сожалению, в 10.30 были вынуждены констатировать смерть.'
    },
    {
        id: '4',
        title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2017-04-27T23:00:00'),
        author: 'Иванов Иван',
        tags:["win", "sport", "russia"],
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
    },
    {
        id: '5',
        title: 'Это я автор налога для безработных',
        summary: 'В Минске появилось и исчезло граффити Это я автор налога для безработных',
        createdAt: new Date('2017-02-27T23:00:00'),
        author: 'Автор 1',
        tags:["minsk", "good"],
        content: 'В центре Минска появилась аппликация, на которой изображена член Совета Республики Марианна Щеткина, ранее — глава Министерства труда и социальной защиты Беларуси. Рядом с ее портретом в полный рост пояснение: «Это я автор налога для безработных». Фотографии творчества неизвестного уличного художника сделал блогер Антон Мотолько. Буквально через пару часов аппликация исчезла — ее оперативно закрасили коммунальные службы.'
    },
    {
        id: '6',
        title: 'Сирены на БелАЭС',
        summary: 'В Литве установят сирены на случай чрезвычайных ситуаций на БелАЭС',
        createdAt: new Date('2017-01-23T23:00:00'),
        author: 'Автор 2',
        tags:["music","belarus","plant"],
        content: 'Департамент пожарной безопасности и спасения (ДПБС) намерен оборудовать на юго-востоке Литвы предупредительные сирены, которые бы информировали население о возможной опасности в случае инцидентов на Островецкой АЭС в Беларуси, сообщает DELFI.'
    },
    {
        id: '7',
        title: 'На платформе умер мужчина',
        summary: 'На платформе станции метро "Институт культуры" умер мужчина',
        createdAt: new Date('2014-02-14T23:00:00'),
        author: 'Автор 1',
        tags:["death"],
        content: 'Утром 5 марта на платформе станции 67-летнему мужчине стало плохо. Бригада из БСМП прибыла на вызов через несколько минут. Медики полчаса пытались реанимировать мужчину, но, к сожалению, в 10.30 были вынуждены констатировать смерть.'
    },
    {
        id: '8',
        title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2017-04-27T23:00:00'),
        author: 'Иванов Иван',
        tags:["win", "sport", "russia"],
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
    },
    {
        id: '9',
        title: 'Это я автор налога для безработных',
        summary: 'В Минске появилось и исчезло граффити Это я автор налога для безработных',
        createdAt: new Date('2017-02-27T23:00:00'),
        author: 'Автор 1',
        tags:["minsk", "good"],
        content: 'В центре Минска появилась аппликация, на которой изображена член Совета Республики Марианна Щеткина, ранее — глава Министерства труда и социальной защиты Беларуси. Рядом с ее портретом в полный рост пояснение: «Это я автор налога для безработных». Фотографии творчества неизвестного уличного художника сделал блогер Антон Мотолько. Буквально через пару часов аппликация исчезла — ее оперативно закрасили коммунальные службы.'
    },
    {
        id: '10',
        title: 'Сирены на БелАЭС',
        summary: 'В Литве установят сирены на случай чрезвычайных ситуаций на БелАЭС',
        createdAt: new Date('2017-01-23T23:00:00'),
        author: 'Автор 2',
        tags:["music","belarus","plant"],
        content: 'Департамент пожарной безопасности и спасения (ДПБС) намерен оборудовать на юго-востоке Литвы предупредительные сирены, которые бы информировали население о возможной опасности в случае инцидентов на Островецкой АЭС в Беларуси, сообщает DELFI.'
    },
    {
        id: '11',
        title: 'На платформе умер мужчина',
        summary: 'На платформе станции метро "Институт культуры" умер мужчина',
        createdAt: new Date('2014-02-14T23:00:00'),
        author: 'Автор 1',
        tags:["death"],
        content: 'Утром 5 марта на платформе станции 67-летнему мужчине стало плохо. Бригада из БСМП прибыла на вызов через несколько минут. Медики полчаса пытались реанимировать мужчину, но, к сожалению, в 10.30 были вынуждены констатировать смерть.'
    },
    {
        id: '12',
        title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2017-08-27T23:00:00'),
        author: 'Иванов Иван',
        tags:["win", "sport", "russia"],
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
    },
    {
        id: '13',
        title: 'Это я автор налога для безработных',
        summary: 'В Минске появилось и исчезло граффити Это я автор налога для безработных',
        createdAt: new Date('2017-02-27T23:00:00'),
        author: 'Любава',
        tags:["minsk", "good"],
        content: 'В центре Минска появилась аппликация, на которой изображена член Совета Республики Марианна Щеткина, ранее — глава Министерства труда и социальной защиты Беларуси. Рядом с ее портретом в полный рост пояснение: «Это я автор налога для безработных». Фотографии творчества неизвестного уличного художника сделал блогер Антон Мотолько. Буквально через пару часов аппликация исчезла — ее оперативно закрасили коммунальные службы.'
    },
    {
        id: '14',
        title: 'Сирены на БелАЭС',
        summary: 'В Литве установят сирены на случай чрезвычайных ситуаций на БелАЭС',
        createdAt: new Date('2017-08-23T23:00:00'),
        author: 'Автор 2',
        tags:["music","belarus","plant"],
        content: 'Департамент пожарной безопасности и спасения (ДПБС) намерен оборудовать на юго-востоке Литвы предупредительные сирены, которые бы информировали население о возможной опасности в случае инцидентов на Островецкой АЭС в Беларуси, сообщает DELFI.'
    },
    {
        id: '15',
        title: 'На платформе умер мужчина',
        summary: 'На платформе станции метро "Институт культуры" умер мужчина',
        createdAt: new Date('2014-02-14T23:00:00'),
        author: 'Виталий Рок',
        tags:["death"],
        content: 'Утром 5 марта на платформе станции 67-летнему мужчине стало плохо. Бригада из БСМП прибыла на вызов через несколько минут. Медики полчаса пытались реанимировать мужчину, но, к сожалению, в 10.30 были вынуждены констатировать смерть.'
    },
    {
        id: '16',
        title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2016-07-28T23:00:00'),
        author: 'Светлана Алексеева',
        tags:["win", "sport", "russia"],
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
    },
    {
        id: '17',
        title: 'Это я автор налога для безработных',
        summary: 'В Минске появилось и исчезло граффити Это я автор налога для безработных',
        createdAt: new Date('2017-02-27T23:00:00'),
        author: 'Алексей Алексеев',
        tags:["minsk", "good"],
        content: 'В центре Минска появилась аппликация, на которой изображена член Совета Республики Марианна Щеткина, ранее — глава Министерства труда и социальной защиты Беларуси. Рядом с ее портретом в полный рост пояснение: «Это я автор налога для безработных». Фотографии творчества неизвестного уличного художника сделал блогер Антон Мотолько. Буквально через пару часов аппликация исчезла — ее оперативно закрасили коммунальные службы.'
    },
    {
        id: '18',
        title: 'Сирены на БелАЭС',
        summary: 'В Литве установят сирены на случай чрезвычайных ситуаций на БелАЭС',
        createdAt: new Date('2014-01-47T23:00:00'),
        author: 'Снежок',
        tags:["music","belarus","plant"],
        content: 'Департамент пожарной безопасности и спасения (ДПБС) намерен оборудовать на юго-востоке Литвы предупредительные сирены, которые бы информировали население о возможной опасности в случае инцидентов на Островецкой АЭС в Беларуси, сообщает DELFI.'
    },
    {
        id: '19',
        title: 'На платформе умер мужчина',
        summary: 'На платформе станции метро "Институт культуры" умер мужчина',
        createdAt: new Date('2012-07-14T23:00:00'),
        author: 'Игорь Игоревич',
        tags:["death"],
        content: 'Утром 5 марта на платформе станции 67-летнему мужчине стало плохо. Бригада из БСМП прибыла на вызов через несколько минут. Медики полчаса пытались реанимировать мужчину, но, к сожалению, в 10.30 были вынуждены констатировать смерть.'
    },
    {
        id: '20',
        title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2017-04-27T23:00:00'),
        author: 'Иванов Иван',
        tags:["win", "sport", "russia"],
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
    }
];


var tags=["good","music","minsk","russia","belarus","plant","sport","win", "death", 'uuuuu', 'newNews'];

function getArticles(skip,top,filterConfiguration){
    skip = skip || 0;
    top = top || 19;
    if(filterConfiguration !== undefined) {
        var _author = filterConfiguration.author || "";
        var _dateBegin = filterConfiguration.dateBegin || new Date(-8640000000000000);
        var _dateEnd = filterConfiguration.dateEnd || new Date(8640000000000000);
        var _tags = filterConfiguration.tags || [];
    }
    var _articles = articles;
    if(filterConfiguration!==undefined) {
        _articles = _articles.filter(function (a) {
            return a.author.indexOf(_author) > -1;
        });
        _articles = _articles.filter(function (a) {
            return a.createdAt >= _dateBegin && a.createdAt <= _dateEnd;
        });
    }

    if(_tags !== undefined) {
        _articles = _articles.filter(function (a) {
            var length =_tags.length;
            var count = 0;
            for (var i = 0; i < a.tags.length; i++) {
                for (var j = 0; j < _tags.length; j++) {
                    if (a.tags[i] === _tags[j]) count++;
                }
            }
            if (count === length) return true;
            return false;
        });
    }

    _articles = _articles.slice(skip, skip + top);
    return _articles.sort(function (a, b) {
        if(a.createdAt - b.createdAt < 0){
            return 1;
        }else return -1;

    });
};

function getArticle(id) {
    if(id === undefined){
        return undefined;
    }
    for (var i = 0; i < articles.length; i++) {
        if (articles[i].id == id) return articles[i];
    }
};

function validateArticle(article) {
    if(typeof article.title !== 'string' || article.title.length<=0 || article.title.length > 100)
        return false;
    if(typeof article.summary !== 'string' || article.summary.length <= 0 || article.summary.length > 200)
        return false;
    if((article.createdAt instanceof Date) === false )
        return false;
    if(typeof article.author !== 'string' || article.author.length <= 0)
        return false;
    if(typeof article.content !== 'string' || article.content.length <= 0)
        return false;
    if(typeof article.id !== 'string' || article.id.length <= 0 || getArticle(article.id) !== undefined)
        return false;
    if( article.tags === undefined)
        return false;
    var count = 0;
    for(var i=0; i < article.tags.length ;i++){
        for(var j=0;j<tags.length;j++){
            if(tags[j] === article.tags[i])
                count++;
        }
    }
    if(count !== article.tags.length)
        return false;
    return true;
};

function validateArticleForEdit(article) {
    if(typeof article.title !== 'string' || article.title.length<=0 || article.title.length > 100)
        return false;
    if(typeof article.summary !== 'string' || article.summary.length <= 0 || article.summary.length > 200)
        return false;
    if((article.createdAt instanceof Date) === false )
        return false;
    if(typeof article.author !== 'string' || article.author.length <= 0)
        return false;
    if(typeof article.content !== 'string' || article.content.length <= 0)
        return false;
    if(article.tags.length<=0)
        return false;
    if( article.tags === undefined)
        return false;
    var count = 0;
    for(var i=0; i < article.tags.length ;i++){
        for(var j=0;j<tags.length;j++){
            if(tags[j] === article.tags[i])
                count++;
        }
    }
    if(count !== article.tags.length)
        return false;
    return true;
};
function addArticle(article) {
    if(validateArticle(article)=== false){
        return false;
    }
    articles.push(article);
    return true;
};

function editArticle(id, article) {
    var _article;
    if((_article = getArticle(id)) === undefined)
        return false;
    if(article.title !== undefined)
        _article.title=article.title;
    if(article.summary !== undefined)
        _article.summary=article.summary;
    if(article.content !== undefined)
        _article.content=article.content;
    if(article.tags!==undefined)
        _article.tags=article.tags;
    if(validateArticleForEdit(_article) === true){
        getArticle(id).title=_article.title;
        getArticle(id).summary=_article.summary;
        getArticle(id).content=_article.content;
        getArticle(id).tags=_article.tags;
        return true;
    }
    return false;
};

function removeArticle(id) {
    var index;
    for (var i = 0; i < articles.length; i++) {
        if (articles[i].id == id) index = i;
    }
    if (index !== undefined){
    articles.splice(index, 1);
    return true;
    }
    return false;
};

function addTag(tag) {
    if(inTags(tag) === -1) {
        tags.push(tag);
        return true;
    }
    return false;
};

function inTags(tag) {
    for(var i=0;i<tags.length;i++){
        if(tags[i] === tag) return i;
    }
    return -1;
};

function deleteTag(tag) {
    var _extraTag =inTags(tag);
    if(_extraTag !== -1) {
        tags.splice(_extraTag, 1);
        return true;
    }
    return false;
};

console.log("----------getArticles:----------");
console.log("Вывод всех записей: ");
console.log(getArticles());
console.log("*************************");
console.log("Вывод промежутка значений от 1 до 4:");
console.log(getArticles(2,4));
console.log("*************************");
console.log("Вывод с фильтрацией по автору 'Автор 1':");
console.log(getArticles(0,9,{author:'Автор 1'}));
console.log("*************************");
console.log("Комбинированный фильтр по автору 'Автор 1' и дате с 2015-01-21T23:00:00 до 2017-03-19T23:00:00");
console.log(getArticles(1,9,{author:'Автор 1',beginDate:new Date('2015-01-21T23:00:00'),endDate:new Date('2017-03-19T23:00:00')}));
console.log("*************************");
console.log("Вывод из промежутка от 0 до 5 с 'пустым' фильтром");
console.log(getArticles(0,5,{}));
console.log("*************************");
console.log("Вывод с фильтрацией по тегу 'russia':");
console.log(getArticles(0,9,{tags: ['russia']}));

console.log("\n\r----------getArticle:----------");
console.log("Поиск статьи по существующему id");
console.log(getArticle("1"));
console.log("*************************");
console.log("Поиск статьи по несуществующему id");
console.log(getArticle("666"));
console.log("*************************");
console.log("Вызов метода без параметров");
console.log(getArticle());

console.log("\n\r----------addArticle:----------");
console.log("пример добавления новости, соответствующей всем параметрам валидности ");
console.log(addArticle({title:"Новость 21",id:"21",summary:"Кратко 21",author:"Автор 21",tags: ['russia', 'music'],createdAt:new Date(),content:"Контент 21"}));
console.log("*************************");
console.log("Добавление новости с уже существующим id ");
console.log(addArticle({title:"Новость 7",id:"2",summary:"Кратко 7",author:"Автор 7",createdAt:new Date(), tags: ['insta'],content:"Контент 7"}));
console.log("*************************");
console.log("Добавление новости, в которой пользователь указал пустым одно из обязательных полей ");
console.log(addArticle({title:"Новость 28",id:"28",summary:"Кратко 28",author:"Автор 28",tags:[], createdAt:new Date(),content:""}));
console.log("*************************");
console.log("Добавление новости, в которой пользователь указал тег, не входящий в массив тегов ");
console.log(addArticle({title:"Новость 25",id:"20",summary:"Кратко 25",author:"Автор 8",tags:['russia', 'english', 'bear'], createdAt:new Date(),content:""}));


console.log("\n\r----------editArticle:----------");
console.log("Изменение Заголовка в первой новости ");
console.log(editArticle("1",{title:"Новая новость 1"}));
console.log(getArticle("1"));
console.log("*************************");
console.log("Изменение новости, id которой не существует");
console.log(editArticle("666",{title:"Новое название"}));
console.log("*************************");
console.log("Полное преображение новости 2");
console.log(editArticle("2",{title:"Новая Новость 2",summary: "Новое кратко 2", content:"Новый контент 2", tags:['uuuuu', 'newNews']}));
console.log(getArticle("2"));
console.log("*************************");
console.log("Изменение новости, когда задали одно из полей пустым");
console.log(editArticle("3",{title:"Новая новость 3",content:""}));

console.log("\n\r----------removeArticle:----------");
console.log("Удаление элемента с id = 4 ");
console.log(removeArticle("4"));
console.log(getArticles());
console.log("*************************");
console.log("Удаление элемента с несуществующим id");
console.log(removeArticle("132"));


console.log("\n\r----------addTag:----------");
console.log("Пример добавления не существующего тега");
console.log(addTag('belavia'));
console.log("*************************");
console.log("Попытка добавить существующий тег");
console.log(addTag('music'));

console.log("\n\r----------deleteTag:----------");
console.log("Удаление существующего тега");
console.log(deleteTag('plant'));
console.log("*************************");
console.log("Удаление несуществующего тега");
console.log(deleteTag('Lokomotiv'));