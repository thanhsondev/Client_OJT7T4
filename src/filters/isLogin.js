
const isLogin = () => {
  const userInfo = {}; // thay lai get data sau khi login
  if (Object.keys(userInfo).length > 0) {
    return true;
  }
  return false;
};

export default isLogin;