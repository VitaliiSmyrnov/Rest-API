const express = require("express");

const { schemas } = require("../../models");
const { validateBody, authenticate } = require("../../middlewares");
const { ctrlAuth } = require("../../controllers");

const router = express.Router();

router.post(
  "/users/register",
  validateBody(schemas.registerSchema),
  ctrlAuth.register
);

router.post("/users/login", validateBody(schemas.loginSchema), ctrlAuth.login);

router.get("/users/current", authenticate, ctrlAuth.getCurrent);

router.post("/users/logout", authenticate, ctrlAuth.logout);

router.patch(
  "/users",
  authenticate,
  validateBody(schemas.updSubscriptionSchema),
  ctrlAuth.updateSubscription
);

module.exports = router;
