const express = require("express");

const router = express.Router();

const { ctrlContacts } = require("../../controllers");
const { validateBody } = require("../../middlewares");
const { contactSchema } = require("../../schemas");

router.get("/", ctrlContacts.getAll);

router.get("/:contactId", ctrlContacts.getContact);

router.post("/", validateBody(contactSchema), ctrlContacts.postContact);

router.delete("/:contactId", ctrlContacts.remContact);

router.put("/:contactId", validateBody(contactSchema), ctrlContacts.updContact);

module.exports = router;
