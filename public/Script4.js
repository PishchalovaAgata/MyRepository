var ArticleService = (function () {
    var articles = [
        {
            id: '1',
            title: 'Это я автор налога для безработных',
            summary: 'В Минске появилось и исчезло граффити Это я автор налога для безработных',
            createdAt: new Date('2017-02-27T00:00:00'),
            author: 'Автор 1',
            content: 'В центре Минска появилась аппликация, на которой изображена член Совета Республики Марианна Щеткина, ранее — глава Министерства труда и социальной защиты Беларуси. Рядом с ее портретом в полный рост пояснение: «Это я автор налога для безработных». Фотографии творчества неизвестного уличного художника сделал блогер Антон Мотолько. Буквально через пару часов аппликация исчезла — ее оперативно закрасили коммунальные службы.'
        },
        {
            id: '2',
            title: 'Сирены на БелАЭС',
            summary: 'В Литве установят сирены на случай чрезвычайных ситуаций на БелАЭС',
            createdAt: new Date('2017-01-23T00:00:00'),
            author: 'Автор 2',
            content: 'Департамент пожарной безопасности и спасения (ДПБС) намерен оборудовать на юго-востоке Литвы предупредительные сирены, которые бы информировали население о возможной опасности в случае инцидентов на Островецкой АЭС в Беларуси, сообщает DELFI.'
        },
        {
            id: '3',
            title: 'На платформе умер мужчина',
            summary: 'На платформе станции метро "Институт культуры" умер мужчина',
            createdAt: new Date('2014-02-14T00:00:00'),
            author: 'Автор 1',
            content: 'Утром 5 марта на платформе станции 67-летнему мужчине стало плохо. Бригада из БСМП прибыла на вызов через несколько минут. Медики полчаса пытались реанимировать мужчину, но, к сожалению, в 10.30 были вынуждены констатировать смерть.'
        },
        {
            id: '4',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-04-27T00:00:00'),
            author: 'Иванов Иван',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
        },
        {
            id: '5',
            title: 'Зарплаты программистов упали на 190 рублей',
            summary: 'Февральская средняя зарплата белорусов составила почти 717 рублей. FINANCE.TUT.BY посмотрел, как в прошлом месяце получки изменились по отраслям.',
            createdAt: new Date('2017-02-27T00:00:00'),
            author: 'Автор 1',
            content: 'Реальные получки больше всего выросли у финансистов Лидируют по уровню зарплат по-прежнему специалисты, которые занимаются информационными технологиями и деятельностью в области информационного обслуживания, — 3 238,2 рубля. Но это на 190,5 рубля меньше, чем в январе.На второй строчке зарплатного топа расположились работники пассажирского воздушного транспорта (почти 1870 рублей), а на третьей — специалисты, которые занимаются вспомогательной деятельностью в сфере финансовых услуг и страхования (почти 1860 рублей).В прошлом месяце на 186,7 рубля выросли получки специалистов, которые оказывают финансовые услуги (кроме страхования и дополнительного пенсионного обеспечения). При этом реальные зарплаты этих работников увеличились больше всего — на 28,8% к аналогичному периоду 2016 года.'
        },
        {
            id: '6',
            title: 'Переводить деньги между электронными кошельками',
            summary: 'Белорусы теперь могут без комиссии совершать переводы между электронными кошельками Яндекс.',
            createdAt: new Date('2017-01-23T00:00:00'),
            author: 'Автор 2',
            content: 'Чтобы отправить перевод из приложения, нужно выбрать получателя из списка контактов в телефонной книге либо вручную указать его электронную почту или номер телефона, на которые зарегистрирован кошелек. Если одному из этих параметров соответствует счет в Яндекс.Деньгах, комиссии за перевод не будет. На именной кошелек можно перевести до 1970 рублей за раз (суммы приведены в пересчете по курсу Нацбанка на 27 марта. — Прим. FINANCE.TUT.BY), на идентифицированный — до 13 110 рублей. Чтобы совершить перевод, кошелек пользователя должен быть идентифицирован. Пройти идентификацию можно в отделениях БПС-Сбербанка или офисе ISEC-System. При себе достаточно иметь паспорт. Также клиенты БПС-Сбербанка могут подать заявку на идентификацию кошелька в Яндекс.Деньгах не выходя из дома — с помощью Сбербанка Онлайн.'
        },
        {
            id: '7',
            title: 'Более 40 человек получат госнаграды.',
            summary: 'Более 40 человек удостоены государственных наград. Указ об этом подписал Александр Лукашенко, сообщает пресс-служба президента Беларуси.',
            createdAt: new Date('2014-02-14T00:00:00'),
            author: 'Автор 1',
            content: 'Орденами и медалям награждены представители разных областей. Их отметили за многолетний и плодотворный труд, высокое профессиональное мастерство, высокие производственные показатели в промышленности, дорожном строительстве и сельском хозяйстве, за значительный личный вклад в реализацию государственной политики в области социальной защиты и охраны здоровья населения, подготовку высококвалифицированных специалистов, развитие системы международных автомобильных перевозок, культуры и искусства. Среди награжденных:орденом Почета — электросварщик ручной сварки трансформаторного цеха Минского электротехнического завода имени Козлова Василий Жигимонт; орденом Франциска Скорины — художник-график, член Белорусского союза художников Владимир Савич;медалью «За трудовые заслуги» — слесарь-электромонтажник цеха комплектных трансформаторных подстанций и низковольтного оборудования Минского электротехнического завода имени Козлова Владимир Гунич;медалью Франциска Скорины — заместитель директора Молодежного театра эстрады Александр Должевский.'
        },
        {
            id: '8',
            title: 'В стране появится система мониторинга общественной безопасности',
            summary: 'Республиканскую систему мониторинга общественной безопасности решено создать в Беларуси.',
            createdAt: new Date('2017-04-27T00:00:00'),
            author: 'Иванов Иван',
            content: '«Глава государства принял наше предложение о том, что такая система уместна и необходима в любом цивилизованном государстве, и поручил дополнительно проработать ряд аспектов, связанных с практической реализацией проекта. В первую очередь это, конечно же, вопросы, связанные с выбором оператора, который будет генерировать все идеи и осуществлять практическую реализацию, начиная от покупки „железа“ и заканчивая эксплуатацией. Мы получили соответствующие указания и будем дорабатывать этот проект указа именно с точки зрения привнесения национальных особенностей и возможностей нашего государства для реализации этого проекта», — рассказал Игорь Шуневич. Министр пояснил, что в этом вопросе в Беларуси не изобретают велосипед: все развитые страны уже давно реализовали такой проект в той или иной форме. Создается же в нашей стране система мониторинга общественной безопасности не на пустом месте. «У нас уже есть определенные элементы этой системы, в том числе несколько тысяч объектов, оборудованных видеокамерами, линии передачи данных, сервера, локальные сети. Система создается, чтобы это все объединить», — уточнил он.'
        },
        {
            id: '9',
            title: '"Ты супер!" на НТВ',
            summary: 'Выступление Насти Кравчени транслировалось в минувшую субботу, 25 марта, в седьмом выпуске телепроекта.',
            createdAt: new Date('2017-02-27T00:00:00'),
            author: 'Автор 1',
            content: 'Проникновенная мелодия, чистый голос исполнительницы покорили жюри. Первой «зеленый свет» нашей землячке «включила» певица Ёлка. А потом практически одновременно Настю поддержали Маргарита Суханкина и Стас Пьеха. И лишь выдержав паузу, зеленую кнопку нажал Виктор Дробыш. Известный композитор, тоже белорус, кстати, слегка напряженную паузу объяснял так: «Не хотел, чтобы публика думала, что голосовал «по территориальному признаку». Публика встречала и провожала Настю восторженно.'
        },
        {
            id: '10',
            title: 'На Партизанском проспекте хотят обновить подсветку',
            summary: 'Вечернюю подсветку Партизанского проспекта в Минске планируется обновить, сообщила на оперативном совещании в мэрии',
            createdAt: new Date('2017-01-23T00:00:00'),
            author: 'Автор 2',
            content: '«Мы готовим предложения по световому решению Партизанского проспекта и элементов улично-дорожной сети Заводского района. Рассчитываем, что большая часть работ будет выполнена ко Дню города», — отметила Светлана Борисович.Специалисты считают необходимым исключить рекламные растяжки над дорожным полотном, сделать их боковыми, более современными. Возможно применение сборно-разборных конструкций. Основное внимание уделят оформлению наиболее посещаемым минчанами местам.Также предлагается разработать цветовую карту города. Речь идет о концепции развития микрорайонов и кварталов в соответствии с определенной тематикой и цветовой гаммой с вкраплением ярких акцентов.«Хотелось бы, чтобы застройка выглядела гармонично. Например, один квартал можно выполнить в охровом оформлении, другой — с использованием иных цветов и элементов, подчинить их определенной теме», — сказала Светлана Борисович.Кроме того, в текущем году институт намерен работать над рекламным оформлением и световой реконструкцией фасадов зданий по проспекту Победителей. Есть идеи по приведению в порядок Слепянской водной системы, включающие разработку проектов по капитальному ремонту наиболее проблемных участков.' },
        {
            id: '11',
            title: 'Откройте для себя мир красоты и комфорта!',
            summary: 'Представляем Вашему вниманию жемчужину семьи «Маяк Минска» — жилой дом «Пикассо»!',
            createdAt: new Date('2014-02-14T00:00:00'),
            author: 'Автор 1',
            content: 'Элитный дом «Пикассо» по праву может называться величественным, ведь это самое высокое здание уникального многофункционального комплекса «Маяк Минска». Высококачественные материалы, панорамное остекление, современный дизайн — «Пикассо» отвечает самым взыскательным требованиям!А самое главное — дом готов к сдаче! Прекрасный вид из окон Вашей новой квартиры на Национальную библиотеку, символ нашего города, либо на Дом Милосердия, окруженный живописным парком, подарит истинное наслаждение!Теперь все необходимое всегда рядом: в Вашем распоряжении салоны красоты, бутики, уютные рестораны и кафе для деловых обедов и теплых семейных ужинов.Выбирайте досуг по душе Вам и Вашей семье — отдых и развлечения в крупнейшем ТРЦ Dana Mall, прогулка по бульвару Пикассо, или пробежка вдоль водоема. Мы предлагаем новые горизонты для яркой насыщенной жизни!'
        },
        {
            id: '12',
            title: 'В Минске появились новые остросоциальные граффити',
            summary: 'Рано утром 27 марта в Минске появились новые остросоциальные граффити. Неизвестный автор посвятил их милиции.',
            createdAt: new Date('2017-08-27T00:00:00'),
            author: 'Иванов Иван',
            content: ' Всего аппликаций три. Во дворе около площади Победы — Игорь Шуневич. На постере глава МВД изображен в полевой форме НКВД и пистолетом в руке. Надпись рядом с ним гласит: «Это я горжусь формой и методами НКВД».В арке, которая ведет во внутренний двор Мингорисполкома, — глава столичного ОМОНа Дмитрий Балаба. Надпись на его аппликации: «Это я руковожу разгонами мирных собраний граждан. За ваши деньги».И последняя наклейка находится на вентиляционной шахте метро напротив главного входа в Институт культуры. Там изображен Игорь Евсеев — глава УВД Минской области. Рядом с ним надпись: «Это мы с пацанами похищаем людей».Наклейки оперативно убрали коммунальные службы. Уже через час аппликации исчезли.Напомним, в Минске продолжают появляться остросоциальные граффити неизвестных авторов. 24 марта неизвестный наклеил на «стене Щеткиной» знаменитую цитату Мартина Лютера Кинга: «Никогда не забывайте: все, что делал Гитлер в Германии, было законным».5 марта аппликация с надписью «Это я автор налога на безработных» и изображением Марианны Щеткиной, ныне члена Совета Республики, а раньше министра труда и социальной защиты, появилась на заборе в центре Минска. Наклейка долго не продержалась — ее оперативно закрасили коммунальные службы. На следующий день на месте граффити появилась надпись «Ну вы же сами все понимаете», но и ее очень быстро ликвидировали.15 марта на «стене Щеткиной» прохожие заметили множество маленьких аппликаций с Мясниковичем.        '
        },
        {
            id: '13',
            title: 'Не хочу попадать в медицинскую систему',
            summary: 'Статистики о том, сколько женщин в Беларуси решаются рожать вне роддома, нет, но желающих немало.',
            createdAt: new Date('2017-02-27T00:00:00'),
            author: 'Любава',
            content: 'Случай в Витебске, где 17 февраля в результате домашних родов погибла новорожденная девочка, снова вернул к этой проблеме. Свое заключение озвучили судмедэксперты: малышка появилась на свет здоровой.— Смерть наступила в результате аспирации околоплодными водами, — отметила Анна Барышникова, официальный представитель управления Госкомитета судебных экспертиз.«У врачей ведь горе от ума: они много знают и постоянно диктуют, что и как»У минчанки Елены сын и дочка. Оба появились на свет дома. Роды прошли хорошо. Сейчас в семье растут здоровые мальчик и девочка.Женщина не скрывает: ехать в больницу она и не собиралась. Даже на учет в женскую консультацию при первой беременности стала только на 30-й неделе. И то лишь затем, чтобы на руках были хоть какие-то документы.— Я не хочу попадать в медицинскую систему, — объясняет она свою позицию.— Во-первых, все, что делают доктора, для меня неприемлемо. Многие мои подруги рожали в больнице, и отношение там к ним было, скажем честно, не очень. Во-вторых, роды должны проходить естественно. А у врачей ведь горе от ума: они много знают и постоянно диктуют, что и как. Но зачем вмешиваться в этот процесс? В-третьих, продолжает Елена, ей важно, чтобы пуповину перерезали не сразу, а через какое-то время.'
        },
        {
            id: '14',
            title: 'Двое граждан России с оружием задержаны',
            summary: 'Двое граждан Российской Федерации с оружием задержаны в Могилевском районе, сообщили БЕЛТА в МВД.',
            createdAt: new Date('2017-08-23T00:00:00'),
            author: 'Автор 2',
            content: '24 марта в 16.00 вблизи деревни Жуково Могилевского района сотрудники отдела Департамента охраны Ленинского района Могилева на дороге задержали автомобиль «Лада Гранта», в котором находились двое граждан России. Оба 1992 года рождения, работники завода «Кремний Эл», жители Брянска.В автомобиле они перевозили два пневматических пистолета, два сигнально-шумовых пистолета, две носимые радиостанции, электрический фонарь с электрошокером «Молния», пять полимерных емкостей с металлическими элементами калибра 4,5 мм для пневматического оружия, газовый баллон для газового оружия, 12 патронов калибра 5,6 мм к сигнально-шумовому оружию, прорезиненную металлическую палку с шипами, а также световозвращающий жилет ДПС, жезл, куртку с опознавательными знаками «МЧС РФ», три шапочки с прорезями для глаз «балаклава», два комплекта защитной экипировки мотоциклиста, флаг Украины.По словам задержанных, они ехали из Брянска в Брест на экскурсию. Молодые люди доставлены в Могилевский РОВД для разбирательства. Проводится проверка.       '
        },
        {
            id: '15',
            title: 'Лукашенко выразил соболезнования Терезе Мэй',
            summary: 'Президент Александр Лукашенко от имени белорусского народа и себя лично выразил соболезнования премьер-министру Великобритании',
            createdAt: new Date('2014-02-14T00:00:00'),
            author: 'Виталий Рок',
            content: 'Президент Александр Лукашенко от имени белорусского народа и себя лично выразил соболезнования премьер-министру Великобритании Терезе Мэй, а также родным и близким погибших в результате теракта в Великобритании.«С глубокой болью и скорбью в Беларуси восприняли известие о человеческих жертвах в результате террористического акта возле парламента Великобритании — в самом центре Лондона», — отметил глава государства.22 марта автомобиль, за рулем которого находился террорист, сбил прохожих и троих полицейских на Вестминстерском мосту в Лондоне. Водитель бросил машину у здания британского парламента, а затем с ножом в руках набросился на полицейского в штатском и попытался проникнуть в Палату общин. Стражи порядка застрелили нападавшего. От рук террориста погибли четверо человек и несколько десятков пострадали.Скотленд-Ярд квалифицировал инцидент как теракт.'
        }
    ];

    articles=(JSON.parse(localStorage.getItem("articles"),(key,value)=>{
        if(key=='createdAt') return new Date(value);
        else return value;
    }))||articles;

    var arrayIMG = [
        {id: '1', url : "IMG/1.jpg"},
        {id: '2', url : "IMG/2.jpg"},
        {id: '3', url : "IMG/3.jpg"},
        {id: '4', url : "IMG/4.png"},
        {id: '5', url : "IMG/5.jpg"},
        {id: '6', url : "IMG/6.jpg"},
        {id: '7', url : "IMG/7.jpg"},
        {id: '8', url : "IMG/8.jpg"},
        {id: '9', url : "IMG/9.png"},
        {id: '10', url : "IMG/10.jpg"},
        {id: '11', url : "IMG/11.jpg"},
        {id: '12', url : "IMG/12.jpg"},
        {id: '13', url : "IMG/13.jpg"},
        {id: '14', url : "IMG/14.jpg"},
        {id: '15', url : "IMG/15.jpg"}
    ];

    arrayIMG=(JSON.parse(localStorage.getItem("arrayIMG")))||arrayIMG;

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
        localStorage.setItem("articles",JSON.stringify(articles));
        localStorage.setItem("arrayIMG",JSON.stringify(arrayIMG));
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
        user=localStorage.getItem("user")||"";
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
        console.log(dataFiltration.dateBegin)
        if(isNaN(dataFiltration.dateBegin)){
            dataFiltration.dateBegin = undefined;
        }
        if(isNaN(dataFiltration.dateEnd)){
            dataFiltration.dateEnd = undefined;
        }
        if(dataFiltration.author.length<=0){
            dataFiltration.author = undefined;
        }
        clearBodyNews();
        amountOfActualNews =0;
        Initialization();
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
        document.getElementById("quit-btn").style.display ='none';
        document.getElementById("logIn-btn").style.display ='';
        user = "";
        document.getElementById("username").innerHTML = "";
        dataFiltration = {};
        clearBodyNews();
        amountOfActualNews =0;
        Initialization();
    }

    function check(userName, password) {
        if(typeof userName === 'string' && typeof password === 'string'){
            for(var i=0; i < Users.length; i++){
                if(Users[i].username === userName && Users[i].password === password){
                    return true;
                }
                return false;
            }
        }
        else return false;
    }

    function clickLogIn() {
        var name = document.getElementById("login-name").value;
        var password = document.getElementById("login-password").value;
        if(check(name,password)){
            user = name;
            localStorage.setItem("user",name);
            location.reload();

        }else
            alert("Неверный логин или пароль!");
    }

    return {
        Initialization : Initialization,
        removeArticle : removeArticle,
        clearBodyNews : clearBodyNews,
        addArticle : addArticle,
        editArticle : editArticle,
        filtration : filtration,
        clickCross : clickCross
    };
}());