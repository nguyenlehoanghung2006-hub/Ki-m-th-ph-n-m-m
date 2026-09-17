function checkLogin(user, pass) {
  if (user === 'admin' && pass === '1234') {
    return true;
  }
  return false;
}

// Xuất module để Jest có thể require được
if (typeof module !== 'undefined' && module.exports) {
  module.exports = checkLogin;
}
