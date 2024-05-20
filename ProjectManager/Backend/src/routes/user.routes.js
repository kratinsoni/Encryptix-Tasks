import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(upload.single("avatar"), registerUser);
router.route("/login").patch(loginUser);
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/getCurrentUser").get(verifyJWT, getCurrentUser);

export default router;
