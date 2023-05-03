const Joi = require("joi");
const { contacts } = require("../models");
const { HttpError } = require("../helpers");

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

const getAll = async (req, res, next) => {
  try {
    const allContacts = await contacts.listContacts();
    res.json(allContacts);
  } catch (error) {
    next(error);
    res.status(500).json({ message: "Server error" });
  }
};

const getContact = async (req, res, next) => {
  try {
    const id = req.params.contactId;
    const oneContact = await contacts.getContactById(id);
    if (!oneContact) {
      throw HttpError(404, "Not found");
    }
    res.json(oneContact);
  } catch (error) {
    next(error);
  }
};

const postContact = async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body);
    if (error) {
      throw HttpError(400, "missing required name field");
    }
    const newContact = await contacts.addContact(req.body);
    res.status(201).json(newContact);
  } catch (error) {
    next(error);
  }
};

const remContact = async (req, res, next) => {
  try {
    const id = req.params.contactId;
    const deletedContact = await contacts.removeContact(id);
    if (!deletedContact) {
      throw HttpError(404, "Not found");
    }
    res.json({ message: "contact deleted" });
  } catch (error) {
    next(error);
  }
};

const updContact = async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body);
    if (error) {
      throw HttpError(400, "missing fields");
    }
    const id = req.params.contactId;
    const updatedContact = await contacts.updateContact(id, req.body);
    if (!updatedContact) {
      throw HttpError(404, "Not found");
    }
    res.json(updatedContact);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getContact,
  postContact,
  remContact,
  updContact,
};
