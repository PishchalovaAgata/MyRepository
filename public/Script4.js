const ArticleService = (function () {
  let articles;
  const xhr = new XMLHttpRequest();
  const getArticlesDiskDB = function () {
    xhr.open('GET', './articles', false);
    xhr.send();
    if (xhr.status !== 200) {
      alert(`Error ${xhr.status()} : ${xhr.statusText}`);
    } else {
      articles = (JSON.parse(xhr.responseText, (key, value) => {
        if (key === 'createdAt') return new Date(value);
        return value;
      }));
    }
  };
  getArticlesDiskDB();
  let arrayIMG;
  const getArrayIMGDiskDB = function () {
    xhr.open('GET', './arrayIMG', false);
    xhr.send();
    if (xhr.status !== 200) {
      alert(`Error ${xhr.status()} : ${xhr.statusText}`);
    } else {
      arrayIMG = (JSON.parse(xhr.responseText));
    }
  };
  getArrayIMGDiskDB();


  function getArticles(skip = 0, top = 19, filterConfiguration = {}) {
    const authorCopy = filterConfiguration.author || '';
    const dateBeginCopy = filterConfiguration.dateBegin || new Date(-8640000000000000);
    const dateEndCopy = filterConfiguration.dateEnd || new Date(8640000000000000);

    let articlesCopy = articles;
    if (filterConfiguration !== undefined) {
      articlesCopy = articlesCopy.filter(a => a.author.indexOf(authorCopy) > -1);
      articlesCopy = articlesCopy.filter(a => a.createdAt >= dateBeginCopy && a.createdAt <= dateEndCopy);
    }
    articlesCopy = articlesCopy.sort((a, b) => b.createdAt - a.createdAt);
    return articlesCopy.slice(skip, skip + top);
  }

  function getArticle(id) {
    if (!id) {
      return undefined;
    }
    for (let i = 0; i < articles.length; i += 1) {
      if (articles[i].id === id) return articles[i];
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
    if (typeof article.id !== 'string' || article.id.length <= 0 || getArticle(article.id) !== undefined) {
      return false;
    }

    return true;
  }

  function validateArticleForEdit(article) {
    if (typeof article.title !== 'string' || article.title.length <= 0 || article.title.length > 100) { return false; }
    if (typeof article.summary !== 'string' || article.summary.length <= 0 || article.summary.length > 200) { return false; }
    if ((article.createdAt instanceof Date) === false) { return false; }
    if (typeof article.author !== 'string' || article.author.length <= 0) { return false; }
    if (typeof article.content !== 'string' || article.content.length <= 0) { return false; }
    return true;
  }

  function addArticle(article) {
    if (validateArticle(article) === false) {
      return false;
    }
    articles.push(article);
    return true;
  }
  function removeArticle(id) {
    let index;
    for (let i = 0; i < articles.length; i += 1) {
      if (articles[i].id === id) index = i;
    }
    if (index !== undefined) {
      articles.splice(index, 1);
      return true;
    }
    return false;
  }
  function editArticle(id, article) {
    const extraCopy = getArticle(id);
    if (!extraCopy) { return false; }
    const articleCopy = Object.assign({}, extraCopy);
    if (article.title !== undefined) { articleCopy.title = article.title; }
    if (article.summary !== undefined) { articleCopy.summary = article.summary; }
    if (article.content !== undefined) { articleCopy.content = article.content; }
    if (validateArticleForEdit(articleCopy) === true) {
      removeArticle(id);
      addArticle(articleCopy);

      return true;
    }
    return false;
  }


  function getIMG(id) {
    for (let i = 0; i < arrayIMG.length; i += 1) {
      if (arrayIMG[i].id === id) {
        return arrayIMG[i].url;
      }
    }
  }

  function addIMG(articleIMG) {
    arrayIMG.push(articleIMG);
  }

  function editIMG(id, url) {
    if (getIMG(id) === undefined) {
      return;
    }
    arrayIMG.find(param => param.id === id).url = url;
  }

  function toLocal() {
    xhr.open('POST', '/articles', true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    xhr.send(JSON.stringify(articles));
    xhr.open('POST', '/arrayIMG', true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    xhr.send(JSON.stringify(arrayIMG));
  }

  return {
    getArticles,
    addArticle,
    getArticle,
    editArticle,
    removeArticle,
    validateArticle,
    validateArticleForEdit,
    getIMG,
    addIMG,
    editIMG,
    toLocal,
  };
}());


const DOMService = (function () {
  const xhr = new XMLHttpRequest();
  let user = '';
  let dataFiltration = {};
  let amountOfActualNews = 0;
  const dateNormal = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };

  const arrayConst = ['FILTR_BTN', 'LOGIN', 'LOGOUT', 'MAIN_PAGE', 'ADD_BTN', 'EDIT_BTN', 'DELETE_BTN'];

  function initialization() {
    if (user.length <= 0) {
      arrayConst.ADD_BTN.style.display = 'none';
      arrayConst.LOGOUT.style.display = 'none';
      arrayConst.LOGIN.style.display = '';
      document.getElementsByClassName('User-Name')[0].innerHTML = '';
    } else {
      document.getElementsByClassName('User-Name')[0].innerHTML = `Имя пользователя: ${user}`;
      arrayConst.ADD_BTN.style.display = '';
      arrayConst.LOGOUT.style.display = '';
      arrayConst.LOGIN.style.display = 'none';
    }

    const bodyNews = document.getElementsByClassName('body-news')[0];
    const array = ArticleService.getArticles(amountOfActualNews, 7, dataFiltration);
    for (let i = 0; i < array.length; i += 1) {
      const url = ArticleService.getIMG(array[i].id);
      const data = document.getElementById('news-template');
      const copy = data.content.cloneNode(true);
      if (user.length <= 0) {
        copy.firstElementChild.getElementsByClassName('tick')[0].style.display = 'none';
        copy.firstElementChild.getElementsByClassName('cross')[0].style.display = 'none';
      }
      copy.firstElementChild.id = array[i].id;
      copy.firstElementChild.getElementsByTagName('h1')[0].innerHTML = array[i].title;
      copy.firstElementChild.getElementsByClassName('author-of-the-news')[0].innerHTML = array[i].author;
      copy.firstElementChild.getElementsByClassName('date-of-the-post')[0].innerHTML = array[i].createdAt.toLocaleString('ru', dateNormal);
      copy.firstElementChild.getElementsByClassName('image-for-the-news')[0].firstElementChild.src = url;
      const string = copy.firstElementChild.getElementsByTagName('p')[0].innerHTML;
      copy.firstElementChild.getElementsByTagName('p')[0].innerHTML = array[i].summary + string;
      bodyNews.appendChild(copy);
    }
    amountOfActualNews += array.length;

    if (ArticleService.getArticles(0, 1000000000, dataFiltration).length === amountOfActualNews) {
      document.getElementsByClassName('Load-more')[0].style.display = 'none';
    } else {
      document.getElementsByClassName('Load-more')[0].style.display = '';
    }
  }

  function clearBodyNews() {
    const bodyNews = document.getElementsByClassName('body-news')[0];
    const a = bodyNews.children.length;
    for (let i = 0; i < a; i += 1) {
      bodyNews.removeChild(bodyNews.firstElementChild);
    }
  }

  function removeArticle(id) {
    if (ArticleService.getArticle(id)) {
      ArticleService.removeArticle(id);
      const bodyNews = document.getElementsByClassName('body-news')[0];
      bodyNews.removeChild(document.getElementById(id));
      ArticleService.toLocal();
    }
  }

  function mainPageClick() {
    location.reload();
    clearBodyNews();
    amountOfActualNews = 0;
    initialization();
    arrayConst.FILTR_BTN.style.display = '';
  }

  function clickTick(elem) {
    clearBodyNews();
    const article = ArticleService.getArticle(elem.parentNode.parentNode.id);
    const bodyNews = document.getElementsByClassName('body-news')[0];
    const data = document.getElementById('edit-form');
    const copy = data.content.cloneNode(true);
    bodyNews.appendChild(copy);
    document.getElementById('edit-nameOfTheNews').value = article.title;
    document.getElementById('edit-summaryOfTheNews').value = article.summary;
    document.getElementById('edit-contentOFTheNews').value = article.content;
    document.getElementById('edit-authorOfTheNews').value = user;
    document.getElementById('edit-dateOfTheNews').value = new Date();
    document.getElementById('edit-imageOfTheNews').value = ArticleService.getIMG(article.id);
    document.getElementById('edit-id').value = article.id;
    document.getElementsByClassName('Load-more')[0].style.display = 'none';
  }

  function readDataFromEditForm() {
    const dataObject = {};
    dataObject.title = document.getElementById('edit-nameOfTheNews').value;
    dataObject.summary = document.getElementById('edit-summaryOfTheNews').value;
    dataObject.content = document.getElementById('edit-contentOFTheNews').value;
    const dataURL = document.getElementById('edit-imageOfTheNews').value;
    dataObject.id = document.getElementById('edit-id').value;
    if (ArticleService.editArticle(dataObject.id, dataObject) && dataURL.length > 0) {
      ArticleService.getArticle(dataObject.id).createdAt = new Date();
      ArticleService.editIMG(dataObject.id, dataURL);
      clearBodyNews();
      amountOfActualNews = 0;
      initialization();
      ArticleService.toLocal();
    }
  }

  function clickCross(elem) {
    document.body.style.overflow = 'hidden';
    removeArticle(elem.parentNode.parentNode.id);
    document.body.style.overflow = '';
  }

  function clickAddNews() {
    clearBodyNews();
    const bodyNews = document.getElementsByClassName('body-news')[0];
    const data = document.getElementById('newNews-form');
    const copy = data.content.cloneNode(true);
    bodyNews.appendChild(copy);
    const id = Math.random() * 1000000;
    document.getElementById('newNews-id').value = id;
    document.getElementById('newNews-authorOfTheNews').value = user;
    document.getElementById('newNews-dateOfTheNews').value = new Date();
    document.getElementsByClassName('Load-more')[0].style.display = 'none';
  }

  function readDataFromNewNEWSForm() {
    const dataObject = {};
    dataObject.title = document.getElementById('newNews-nameOfTheNews').value;
    dataObject.summary = document.getElementById('newNews-summaryOfTheNews').value;
    dataObject.id = document.getElementById('newNews-id').value;
    dataObject.author = document.getElementById('newNews-authorOfTheNews').value;
    dataObject.createdAt = new Date();
    dataObject.content = document.getElementById('newNews-contentOFTheNews').value;
    const dataURL = document.getElementById('newNews-imageOfTheNews').value;
    if (ArticleService.addArticle(dataObject) && dataURL.length > 0) {
      ArticleService.addIMG({ id: dataObject.id, url: dataURL });
      clearBodyNews();
      amountOfActualNews = 0;
      initialization();
      ArticleService.toLocal();
    } else {
      alert('WRONG');
    }
  }

  function readDataFromFiltrationForm() {
    dataFiltration.dateEnd = new Date(document.getElementById('filtration-date-to').value);
    dataFiltration.dateBegin = new Date(document.getElementById('filtration-date-from').value);
    dataFiltration.author = document.getElementById('filtration-author').value;
    if (isNaN(dataFiltration.dateBegin)) {
      dataFiltration.dateBegin = undefined;
    }
    if (isNaN(dataFiltration.dateEnd)) {
      dataFiltration.dateEnd = undefined;
    }
    if (dataFiltration.author.length <= 0) {
      dataFiltration.author = undefined;
    }

    if (ArticleService.getArticles(0, 1000000000, dataFiltration).length === 0 || dataFiltration.length === 0) {
      clearBodyNews();
      const bodyNews = document.getElementsByClassName('body-news')[0];
      const data = document.getElementById('error-window');
      const copy = data.content.cloneNode(true);
      bodyNews.appendChild(copy);
      document.getElementsByClassName('Load-more')[0].style.display = 'none';
    } else {
      clearBodyNews();
      amountOfActualNews = 0;
      initialization();
    }
  }

  function cleanFiltrationForm() {
    document.getElementById('filtration-date-to').value = '';
    document.getElementById('filtration-author').value = '';
    document.getElementById('filtration-date-from').value = '';
    dataFiltration = undefined;
  }

  function clickReadMore(elem) {
    clearBodyNews();
    const article = ArticleService.getArticle(elem.parentNode.parentNode.parentNode.id);
    const bodyNews = document.getElementsByClassName('body-news')[0];
    const data = document.getElementById('template-detail-news');
    const copy = data.content.cloneNode(true);
    copy.firstElementChild.getElementsByTagName('h1')[0].innerHTML = article.title;
    copy.firstElementChild.getElementsByClassName('author-of-the-news')[0].innerHTML = article.author;
    copy.firstElementChild.getElementsByClassName('date-of-the-post')[0].innerHTML = article.createdAt.toLocaleString('en', dateNormal);
    copy.firstElementChild.getElementsByClassName('image-for-the-news')[0].firstElementChild.src = ArticleService.getIMG(article.id);
    copy.firstElementChild.getElementsByTagName('p')[0].innerHTML = article.content;
    bodyNews.appendChild(copy);
    document.getElementsByClassName('Load-more')[0].style.display = 'none';
    arrayConst.FILTR_BTN.style.display = 'none';
  }

  function clicklogOut() {
    xhr.open('POST', './logOut', true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    xhr.send();
    user = null;
    location.reload();
  }

  function clickLogIn() {
    const name = document.getElementById('login-name').value;
    const password = document.getElementById('login-password').value;
    const body = { username: name, password };
    xhr.open('POST', './logIn', true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    xhr.send(JSON.stringify(body));
    xhr.open('GET', './actualUser', false);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    xhr.send();
    if (xhr.status === 200) {
      user = xhr.responseText;
      location.reload();
    } else {
      alert(xhr.responseText);
    }
  }

  const documentGOOD = () => {
    arrayConst.FILTR_BTN = document.getElementById('filtration-btn');
    arrayConst.LOGIN = document.getElementById('logIn-btn');
    arrayConst.LOGOUT = document.getElementById('quit-btn');
    arrayConst.MAIN_PAGE = document.getElementById('main-page');
    arrayConst.ADD_BTN = document.getElementById('news-template-add-news');
    arrayConst.EDIT_BTN = document.getElementsByClassName('news-template-tick');
    arrayConst.DELETE_BTN = document.getElementsByClassName('news-template-cross');

    const eventArray = {
      'news-template-tick': e => clickTick(e),
      'edit-btn-form': e => readDataFromEditForm(e),
      'news-template-cross': e => clickCross(e),
      'news-template-add-news': e => clickAddNews(e),
      'newNews-btn-form': e => readDataFromNewNEWSForm(e),
      'btn-filtration-form': e => readDataFromFiltrationForm(e),
      'btn-clean-form': e => cleanFiltrationForm(e),
      'read-more': e => clickReadMore(e),
      'main-page': e => mainPageClick(e),
      'quit-btn': e => clicklogOut(e),
      'login-send-btn': e => clickLogIn(e),
      'load-more': e => initialization(e),
    };

    const defineClass = (event) => {
      eventArray[event.target.id](event.target);
    };

    document.getElementsByClassName('body-news')[0].addEventListener('click', event => defineClass(event));
    document.getElementsByClassName('menu')[0].addEventListener('click', event => defineClass(event));
    document.getElementsByClassName('Load-more')[0].addEventListener('click', event => defineClass(event));
    xhr.open('GET', './actualUser', false);
    xhr.send();
    if (xhr.status === 200) {
      user = xhr.responseText;
    }
    initialization();
  };


  document.addEventListener('DOMContentLoaded', documentGOOD);
}());
