const register = require("./register.js");
const login = require("./login.js");
const getCurrent = require("./current.js");
const logout = require("./logout.js");
const updateSubscription = require("./updateSubscription.js");
const updateAvatar = require("./updateAvatar.js");
const verifyEmail = require("./verifyEmail.js");
const resendVerifyEmail = require("./resendVerifyEmail.js");

module.exports = {
  register,
  login,
  getCurrent,
  logout,
  updateSubscription,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail,
};
