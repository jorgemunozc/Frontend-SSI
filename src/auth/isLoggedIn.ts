function isLoggedIn() {
    return localStorage.getItem('isLoggedIn')? true: false;
}

export default isLoggedIn;