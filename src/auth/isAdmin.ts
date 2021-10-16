function isAdmin(): boolean {
    return localStorage.getItem('isAdmin')? true: false;
}

export default isAdmin;