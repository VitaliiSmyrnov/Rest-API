const { Contact } = require("../models");
const { HttpError, ctrlWrapper } = require("../helpers");

const getOneContact = async (req, res) => {
  const id = req.params.contactId;
  const oneContact = await Contact.findById(id);
  if (!oneContact) {
    throw HttpError(404, "Not found");
  }
  res.json(oneContact);
};

module.exports = ctrlWrapper(getOneContact);
