function removeLoggedIn() {
    localStorage.removeItem('isLoggedIn');
}

function removeAdmin() {
    localStorage.removeItem('isAdmin');
}

export {
    removeAdmin,
    removeLoggedIn,
}