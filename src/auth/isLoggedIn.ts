function isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn')? true: false;
}

export default isLoggedIn;