const { Contact } = require("../models");
const { ctrlWrapper } = require("../helpers");

const getAllContacts = async (req, res) => {
  const allContacts = await Contact.find();
  res.json(allContacts);
};

module.exports = ctrlWrapper(getAllContacts);
