function unsetLoggedIn(): void {
    localStorage.removeItem('isLoggedIn');
}

function unsetAdminSession(): void {
    localStorage.removeItem('isAdmin');
}

function unsetSuperUserSession(): void {
    localStorage.removeItem('isSU');
}

function unsetSession(): void {
    unsetLoggedIn();
    unsetAdminSession();
    unsetSuperUserSession();
}

export {
    unsetAdminSession,
    unsetSuperUserSession,
    unsetSession
}