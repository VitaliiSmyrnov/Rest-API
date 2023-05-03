const express = require("express");

const router = express.Router();

const { ctrlContacts } = require("../../controllers");

router.get("/", ctrlContacts.getAll);

router.get("/:contactId", ctrlContacts.getContact);

router.post("/", ctrlContacts.postContact);

router.delete("/:contactId", ctrlContacts.remContact);

router.put("/:contactId", ctrlContacts.updContact);

module.exports = router;
