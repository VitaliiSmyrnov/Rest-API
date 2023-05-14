const {
  Contact,
  addContactSchema,
  updStatusContactSchema,
} = require("./contact.js");
const {
  User,
  registerSchema,
  emailSchema,
  loginSchema,
  updSubscriptionSchema,
} = require("./user.js");

const schemas = {
  addContactSchema,
  updStatusContactSchema,
  registerSchema,
  emailSchema,
  loginSchema,
  updSubscriptionSchema,
};

module.exports = {
  Contact,
  User,
  schemas,
};
