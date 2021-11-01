function setLoggedIn(): void {
    localStorage.setItem('isLoggedIn', 'true');
}

function setAdminSession(): void {
    localStorage.setItem('isAdmin', 'true');
}

function setSession(): void {
    setLoggedIn();
}

function setSuperUserSession(): void {
    localStorage.setItem('isSU', 'true');
}

export { 
    setAdminSession,
    setSuperUserSession,
    setSession
}