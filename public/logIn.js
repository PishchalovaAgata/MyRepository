const xhr = new XMLHttpRequest();
let user = '';
let amountOfActualNews = 0;

function post(url, who) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.onerror = function () {
            reject(new Error('Network Error'));
        };
        xhr.onload = function () {
            if (this.status === 200) {
                resolve(xhr.responseText);
            } else {
                const error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        xhr.send(JSON.stringify(who));
    });
}
function get(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.onload = function () {
            if (this.status === 200) {
                resolve(this.response);
            } else {
                const error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };
        xhr.onerror = function () {
            reject(new Error('Network Error'));
        };
        xhr.send();
    });
}

function getUSer(){
    get("/user")
        .then(
            response =>{
                user = response;
                amountOfActualNews=0;
                DOMService.clearBodyNews()
                DOMService.initialization();
            },
            error => {
                amountOfActualNews=0;
                DOMService.clearBodyNews()
                DOMService.initialization();
            }
        );
}

function  login() {
    const name = document.getElementById('login-name').value;
    const password = document.getElementById('login-password').value;
    const body = { username: name, password };
    post('/login', body)
        .then(
            (response) => {
                amountOfActualNews=0;
                DOMService.clearBodyNews();
                DOMService.initialization();
                document.getElementById('loginClose').click();
                getUSer();
            },
            error => alert(`Rejected: ${error}`)
        );
}

function  logout() {
    post('/logout')
        .then(
            (response) => {
                user =null;
                location.reload();
            },
            error => alert(`Rejected: ${error}`)
        );
}