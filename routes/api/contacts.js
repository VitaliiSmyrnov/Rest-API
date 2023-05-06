const express = require("express");

const router = express.Router();

const { ctrlContacts } = require("../../controllers");
const { isValidId, validateBody } = require("../../middlewares");
const { schemas } = require("../../models");

router.get("/", ctrlContacts.getAll);

router.get("/:contactId", isValidId, ctrlContacts.getContact);

router.post(
  "/",
  validateBody(schemas.addContactSchema),
  ctrlContacts.postContact
);

router.delete("/:contactId", isValidId, ctrlContacts.remContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addContactSchema),
  ctrlContacts.updContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updStatusContactSchema),
  ctrlContacts.updStatusContact
);

module.exports = router;
