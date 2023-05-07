const express = require("express");

const router = express.Router();

const { ctrlContacts } = require("../../controllers");
const { isValidId, validateBody } = require("../../middlewares");
const { schemas } = require("../../models");

router.get("/", ctrlContacts.getAllContacts);

router.get("/:contactId", isValidId, ctrlContacts.getOneContact);

router.post(
  "/",
  validateBody(schemas.addContactSchema),
  ctrlContacts.addContact
);

router.delete("/:contactId", isValidId, ctrlContacts.removeContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addContactSchema),
  ctrlContacts.updateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updStatusContactSchema),
  ctrlContacts.updateStatusContact
);

module.exports = router;
