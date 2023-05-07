const {
  Contact,
  addContactSchema,
  updStatusContactSchema,
} = require("./contact.js");
const { User, registerSchema, loginSchema } = require("./user.js");

const schemas = {
  addContactSchema,
  updStatusContactSchema,
  registerSchema,
  loginSchema,
};

module.exports = {
  Contact,
  User,
  schemas,
};
