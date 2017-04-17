const xhr = new XMLHttpRequest();
let user = '';
let amountOfActualNews = 0;
const get = function (url) {
    return new Promise(function (resolve, reject) {
        xhr.open('GET', './'+url, false);
        xhr.onload = function () {
            if (xhr.status !== 200) {
                error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            } else {
                resolve(xhr.responseText);
            }
        };
        xhr.onerror = function () {
            reject(new Error("Network Error!"))
        };
        xhr.send();
    });
};
function post(url, who) {
    return new Promise((resolve, reject) => {
        xhr.open('POST', url, true);
        xhr.onerror = function () {
            reject(new Error('Network Error'));
        };
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        xhr.send(JSON.stringify(who));
    });
}

function getUSer(){
    get("actualUser")
        .then(
            response =>{
                user = xhr.responseText;
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
    post('/logIn',body)
        .then(error => alert(`Rejected: ${error}`));
    getUSer();
    document.getElementById('loginClose').click()
}
function  logout() {
    post('/logOut')
        .then(error => alert(`Rejected: ${error}`));
    user = null;
    location.reload();
}