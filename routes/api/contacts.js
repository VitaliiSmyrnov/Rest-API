const express = require("express");
const Joi = require("joi");
const contacts = require("../../models/contacts");

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const allContacts = await contacts.listContacts();
    res.json(allContacts);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    const { id } = req.params;
    const oneContact = await contacts.getContactById(id);
    if (!oneContact) {
      const error = new Error("Not found");
      error.status = 404;
      throw error;
    }
    res.json(oneContact);
  } catch (error) {
    const { status = 500, message = "Server error" } = error;
    res.status(status).json({ message });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      const error = new Error("missing required name field");
      error.status = 400;
      throw error;
    }
    const newContact = await contacts.addContact(req.body);
    res.status(201).json(newContact);
  } catch (error) {
    const { status = 500, message = "Server error" } = error;
    res.status(status).json({ message });
  }
});

router.delete("/:contactId", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedContact = await contacts.removeContact(id);
    if (!deletedContact) {
      const error = new Error("Not found");
      error.status = 404;
      throw error;
    }
    res.json({ message: "contact deleted" });
  } catch (error) {
    const { status = 500, message = "Server error" } = error;
    res.status(status).json({ message });
  }
});

router.put("/:contactId", async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      const error = new Error("missing fields");
      error.status = 400;
      throw error;
    }
    const { id } = req.params;
    const updatedContact = await contacts.updateContact(id, req.body);
    if (!updatedContact) {
      const error = new Error("Not found");
      error.status = 404;
      throw error;
    }
    res.json(updatedContact);
  } catch (error) {
    const { status = 500, message = "Server error" } = error;
    res.status(status).json({ message });
  }
});

module.exports = router;
