const DOMService = (function () {
  let dataFiltration = {};
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

    const config = {};
    const beginDate = dataFiltration.dateBegin || new Date(-8640000000000000);
    const endDate = dataFiltration.dateEnd || new Date(8640000000000000);
    if (dataFiltration.author) { config.author = dataFiltration.author; }
    config.createdAt = {
      $gte: beginDate,
      $lte: endDate,
    };
    const body = {
      config,
      skip: amountOfActualNews,
      top: 2,
    };

    post('articles', body)
        .then(
            (response) => {
              const bodyNews = document.getElementsByClassName('body-news')[0];
              const articles = JSON.parse(response, (key, value) => {
                if (key === 'createdAt') return new Date(value);
                return value;
              });
              articles.forEach((item) => {
                const data = document.getElementById('news-template');
                const copy = data.content.cloneNode(true);
                if (user.length <= 0) {
                  copy.firstElementChild.getElementsByClassName('tick')[0].style.display = 'none';
                  copy.firstElementChild.getElementsByClassName('cross')[0].style.display = 'none';
                }
                copy.firstElementChild.id = item._id;
                copy.firstElementChild.getElementsByTagName('h1')[0].innerHTML = item.title;
                copy.firstElementChild.getElementsByClassName('author-of-the-news')[0].innerHTML = item.author;
                copy.firstElementChild.getElementsByClassName('date-of-the-post')[0].innerHTML = item.createdAt.toLocaleString('ru', dateNormal);
                copy.firstElementChild.getElementsByClassName('image-for-the-news')[0].firstElementChild.src = item.url;
                const string = copy.firstElementChild.getElementsByTagName('p')[0].innerHTML;
                copy.firstElementChild.getElementsByTagName('p')[0].innerHTML = item.summary + string;
                bodyNews.appendChild(copy);
              });
              amountOfActualNews += articles.length;
              get('maxSize')
                    .then(
                        (response) => {
                          if (amountOfActualNews === JSON.parse(response)) {
                            document.getElementsByClassName('Load-more')[0].style.display = 'none';
                          } else {
                            document.getElementsByClassName('Load-more')[0].style.display = '';
                          }
                        },
                        error => alert(`Rejected: ${error}`)
                    );
            },
            error => alert(`Rejected: ${error}`)
        );
  }
  function clearBodyNews() {
    const bodyNews = document.getElementsByClassName('body-news')[0];
    const a = bodyNews.children.length;
    for (let i = 0; i < a; i += 1) {
      bodyNews.removeChild(bodyNews.firstElementChild);
    }
  }
  function removeArticle(id) {
    post('/removeArticle', { id })
          .then(
              (response) => {
                const bodyNews = document.getElementsByClassName('body-news')[0];
                bodyNews.removeChild(document.getElementById(id));
              },
              error => alert(`Rejected: ${error}`)
          );
  }
  function mainPageClick() {
    location.reload();
    clearBodyNews();
    amountOfActualNews = 0;
    initialization();
    arrayConst.FILTR_BTN.style.display = '';
  }
  function clickCross(elem) {
    document.body.style.overflow = 'hidden';
    removeArticle(elem.parentNode.parentNode.id);
    document.body.style.overflow = '';
  }
  function cleanFiltrationForm() {
    document.getElementById('filtration-date-to').value = '';
    document.getElementById('filtration-author').value = '';
    document.getElementById('filtration-date-from').value = '';
    dataFiltration = undefined;
  }
  function clickReadMore(elem) {
    post('/article', { id: elem.parentNode.parentNode.parentNode.id })
            .then(
                (response) => {
                  const article = JSON.parse(response, (key, value) => {
                    if (key === 'createdAt') return new Date(value);
                    return value;
                  });
                  clearBodyNews();
                  const bodyNews = document.getElementsByClassName('body-news')[0];
                  const data = document.getElementById('template-detail-news');
                  const copy = data.content.cloneNode(true);
                  copy.firstElementChild.getElementsByTagName('h1')[0].innerHTML = article.title;
                  copy.firstElementChild.getElementsByClassName('author-of-the-news')[0].innerHTML = article.author;
                  copy.firstElementChild.getElementsByClassName('date-of-the-post')[0].innerHTML = article.createdAt.toLocaleString('en', dateNormal);
                  copy.firstElementChild.getElementsByClassName('image-for-the-news')[0].firstElementChild.src = article.url;
                  copy.firstElementChild.getElementsByTagName('p')[0].innerHTML = article.content;
                  bodyNews.appendChild(copy);
                  document.getElementsByClassName('Load-more')[0].style.display = 'none';
                  arrayConst.FILTR_BTN.style.display = 'none';
                },
                error => alert(`Rejected: ${error}`)
            );
  }
  function clickAddNews() {
    clearBodyNews();
    const bodyNews = document.getElementsByClassName('body-news')[0];
    const data = document.getElementById('newNews-form');
    const copy = data.content.cloneNode(true);
    bodyNews.appendChild(copy);
    document.getElementById('newNews-authorOfTheNews').value = user;
    document.getElementById('newNews-dateOfTheNews').value = new Date();
    document.getElementsByClassName('Load-more')[0].style.display = 'none';
  }
  function validateArticle(article) {
    if (typeof article.title !== 'string' || article.title.length <= 0 || article.title.length > 100) {
      return false;
    }
    if (typeof article.summary !== 'string' || article.summary.length <= 0 || article.summary.length > 200) {
      return false;
    }
    if (typeof article.content !== 'string' || article.content.length <= 0) {
      return false;
    }

    return true;
  }
  function readDataFromNewNEWSForm() {
    const dataObject = {};
    dataObject.title = document.getElementById('newNews-nameOfTheNews').value;
    dataObject.summary = document.getElementById('newNews-summaryOfTheNews').value;
    dataObject.author = document.getElementById('newNews-authorOfTheNews').value;
    dataObject.createdAt = new Date();
    dataObject.content = document.getElementById('newNews-contentOFTheNews').value;
    dataObject.url = document.getElementById('newNews-imageOfTheNews').value;
    if (validateArticle(dataObject)) {
      post('/createArticle', { dataObject })
                .then(
                    (response) => {
                      alert('OK');
                      clearBodyNews();
                      amountOfActualNews = 0;
                      initialization();
                    },
                    error => alert(`Rejected: ${error}`)
                );
    } else {
      alert('Что-то заполнено не так');
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
      'quit-btn': e => logout(e),
      'login-send-btn': e => login(e),
      'load-more': e => initialization(e),
    };

    const defineClass = (event) => {
      eventArray[event.target.id](event.target);
    };

    document.getElementsByClassName('body-news')[0].addEventListener('click', event => defineClass(event));
    document.getElementsByClassName('menu')[0].addEventListener('click', event => defineClass(event));
    document.getElementsByClassName('Load-more')[0].addEventListener('click', event => defineClass(event));
    getUSer();
  };
  document.addEventListener('DOMContentLoaded', documentGOOD);
  function clickTick(elem) {
    post('/article', { id: elem.parentNode.parentNode.id })
          .then(
              (response) => {
                clearBodyNews();
                const article = JSON.parse(response, (key, value) => {
                  if (key === 'createdAt') return new Date(value);
                  return value;
                });
                const bodyNews = document.getElementsByClassName('body-news')[0];
                const data = document.getElementById('edit-form');
                const copy = data.content.cloneNode(true);
                bodyNews.appendChild(copy);
                document.getElementById('edit-nameOfTheNews').value = article.title;
                document.getElementById('edit-summaryOfTheNews').value = article.summary;
                document.getElementById('edit-contentOFTheNews').value = article.content;
                document.getElementById('edit-authorOfTheNews').value = user;
                document.getElementById('edit-dateOfTheNews').value = new Date();
                document.getElementById('edit-imageOfTheNews').value = article.url;
                document.getElementById('edit-id').value = article._id;
                document.getElementById('edit-id').style.display = 'none';
                document.getElementsByClassName('Load-more')[0].style.display = 'none';
              },
              error => alert(`Rejected: ${error}`)
          );
  }
  function readDataFromEditForm() {
    const dataObject = {};
    dataObject.title = document.getElementById('edit-nameOfTheNews').value;
    dataObject.summary = document.getElementById('edit-summaryOfTheNews').value;
    dataObject.content = document.getElementById('edit-contentOFTheNews').value;
    dataObject.url = document.getElementById('edit-imageOfTheNews').value;
    dataObject._id = document.getElementById('edit-id').value;
    if (validateArticle(dataObject)) {
      post('/updateArticle', { dataObject })
              .then(
                  (response) => {
                    alert('OK');
                    clearBodyNews();
                    amountOfActualNews = 0;
                    initialization();
                  },
                  error => alert(`Rejected: ${error}`)
              );
    } else {
      alert('Что-то заполнено не так');
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
    get('maxSize')
          .then(
              (response) => {
                if (JSON.parse(response) === 0 || dataFiltration.length === 0) {
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
              },
              error => alert(`Rejected: ${error}`),
          );
  }
  return {
    initialization,
    clearBodyNews,

  };
}());
