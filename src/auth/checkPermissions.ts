function isSuperUser(): boolean {
  return localStorage.getItem('isSU')? true: false;
}

export default isSuperUser;