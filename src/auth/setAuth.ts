function setLoggedIn() {
    localStorage.setItem('isLoggedIn', 'true');
}

function setAdminSession() {
    localStorage.setItem('isAdmin', 'true');
}

export { 
    setLoggedIn,
    setAdminSession,
}