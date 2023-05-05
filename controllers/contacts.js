const { Contact } = require("../models");
const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
  const allContacts = await Contact.find();
  res.json(allContacts);
};

const getContact = async (req, res) => {
  const id = req.params.contactId;
  const oneContact = await Contact.findById(id);
  if (!oneContact) {
    throw HttpError(404, "Not found");
  }
  res.json(oneContact);
};

const postContact = async (req, res) => {
  const newContact = await Contact.create(req.body);
  res.status(201).json(newContact);
};

const remContact = async (req, res) => {
  const id = req.params.contactId;
  const deletedContact = await Contact.findByIdAndDelete(id);
  if (!deletedContact) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "contact deleted" });
};

const updContact = async (req, res) => {
  const id = req.params.contactId;
  const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedContact) {
    throw HttpError(404, "Not found");
  }
  res.json(updatedContact);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getContact: ctrlWrapper(getContact),
  postContact: ctrlWrapper(postContact),
  remContact: ctrlWrapper(remContact),
  updContact: ctrlWrapper(updContact),
};
