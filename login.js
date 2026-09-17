function checkLogin(user, pass) {
  if (user === 'admin' && pass === '123') {
    return true;
  }
  return false;
}

// Xuất module để Jest có thể require được
if (typeof module !== 'undefined' && module.exports) {
  module.exports = checkLogin;
}
