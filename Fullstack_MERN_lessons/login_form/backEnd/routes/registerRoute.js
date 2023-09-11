import express from "express";
import { check, validationResult } from "express-validator";
import Register from "../module/registration.js";

let router = express.Router();

router.post(
  "/",
  check("firstname").notEmpty().withMessage("firstname is required"),
  check("lastname").notEmpty().withMessage("lastname is not valid"),
  check("email").notEmpty().withMessage("email is required"),
  check("email").isEmail().withMessage("Email is not valid"),
  check("password").notEmpty().withMessage("Password required"),
  check("password")
    .isLength({ min: 5 })
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/)
    .withMessage("not a strong password"),
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
    }
    const myData = await Register.create(req.body);
    myData.save();
    res.json({ success: true });
  }
);

export default router;
