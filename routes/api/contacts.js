const express = require("express");

const router = express.Router();

const { ctrlContacts } = require("../../controllers");
const { isValidId, validateBody } = require("../../middlewares");
const { addContactSchema, updStatusContactSchema } = require("../../schemas");

router.get("/", ctrlContacts.getAll);

router.get("/:contactId", isValidId, ctrlContacts.getContact);

router.post("/", validateBody(addContactSchema), ctrlContacts.postContact);

router.delete("/:contactId", isValidId, ctrlContacts.remContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(addContactSchema),
  ctrlContacts.updContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(updStatusContactSchema),
  ctrlContacts.updStatusContact
);

module.exports = router;
