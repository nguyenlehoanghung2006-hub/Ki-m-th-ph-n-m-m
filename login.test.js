const checkLogin = require('./login');

test('đăng nhập đúng tài khoản trả về true', () => {
  expect(checkLogin('admin', '123')).toBe(true);
});

test('đăng nhập sai mật khẩu trả về false', () => {
  expect(checkLogin('admin', 'wrongpass')).toBe(false);
});

test('đăng nhập sai tài khoản trả về false', () => {
  expect(checkLogin('user', '123')).toBe(false);
});
