import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  userProfile,
  updateProfile,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.route("/profile").get(userProfile).put(updateProfile);
export { router };
