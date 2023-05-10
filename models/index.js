const {
  Contact,
  addContactSchema,
  updStatusContactSchema,
} = require("./contact.js");
const {
  User,
  registerSchema,
  loginSchema,
  updSubscriptionSchema,
} = require("./user.js");

const schemas = {
  addContactSchema,
  updStatusContactSchema,
  registerSchema,
  loginSchema,
  updSubscriptionSchema,
};

module.exports = {
  Contact,
  User,
  schemas,
};
