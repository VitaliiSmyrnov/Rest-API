const express = require("express");

const router = express.Router();

const { ctrlContacts } = require("../../controllers");
const { isValidId, validateBody } = require("../../middlewares");
const { contactSchema } = require("../../schemas");

router.get("/", ctrlContacts.getAll);

router.get("/:contactId", isValidId, ctrlContacts.getContact);

router.post("/", validateBody(contactSchema), ctrlContacts.postContact);

router.delete("/:contactId", isValidId, ctrlContacts.remContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(contactSchema),
  ctrlContacts.updContact
);

module.exports = router;
