const express = require("express");

const { schemas } = require("../../models");
const { validateBody, authenticate, upload } = require("../../middlewares");
const { ctrlAuth } = require("../../controllers");

const router = express.Router();

// register
router.post(
  "/users/register",
  validateBody(schemas.registerSchema),
  ctrlAuth.register
);

router.get("/users/verify/:verificationToken", ctrlAuth.verifyEmail);

router.post(
  "/users/verify",
  validateBody(schemas.emailSchema),
  ctrlAuth.resendVerifyEmail
);

// login
router.post("/users/login", validateBody(schemas.loginSchema), ctrlAuth.login);

router.get("/users/current", authenticate, ctrlAuth.getCurrent);

router.post("/users/logout", authenticate, ctrlAuth.logout);

router.patch(
  "/users",
  authenticate,
  validateBody(schemas.updSubscriptionSchema),
  ctrlAuth.updateSubscription
);

router.patch(
  "/users/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlAuth.updateAvatar
);

module.exports = router;
