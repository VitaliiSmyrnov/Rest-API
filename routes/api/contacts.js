const express = require("express");

const router = express.Router();

const { ctrlContacts } = require("../../controllers");
const { isValidId, validateBody, authenticate } = require("../../middlewares");
const { schemas } = require("../../models");

router.get("/", authenticate, ctrlContacts.getAllContacts);

router.get("/:contactId", authenticate, isValidId, ctrlContacts.getOneContact);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addContactSchema),
  ctrlContacts.addContact
);

router.delete(
  "/:contactId",
  authenticate,
  isValidId,
  ctrlContacts.removeContact
);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.addContactSchema),
  ctrlContacts.updateContact
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updStatusContactSchema),
  ctrlContacts.updateStatusContact
);

module.exports = router;
