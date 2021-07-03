function isAdmin() {
    return localStorage.getItem('isAdmin')? true: false;
}

export default isAdmin;