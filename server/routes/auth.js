const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

// ثبت نام
router.post("/register", authController.register);

// ورود
router.post("/login", authController.login);

router.get("/profile", authController.profile);

module.exports = router;