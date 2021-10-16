function setLoggedIn(): void {
    localStorage.setItem('isLoggedIn', 'true');
}

function setAdminSession(): void {
    localStorage.setItem('isAdmin', 'true');
}

export { 
    setLoggedIn,
    setAdminSession,
}