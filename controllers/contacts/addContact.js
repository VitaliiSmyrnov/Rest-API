const { Contact } = require("../../models");
const { ctrlWrapper } = require("../../helpers");

const addContact = async (req, res) => {
  const { _id: owner } = req.user;
  const newContact = await Contact.create({ ...req.body, owner });

  res.status(201).json({ code: 201, data: newContact });
};

module.exports = ctrlWrapper(addContact);
