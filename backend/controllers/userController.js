import asyncHandler from "express-async-handler";
import User from "../models/userSchema.js";

// @desc        Register a new user/Set token
// route        POST api/users/
// @access      Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExisits = await User.findOne({ email });
  const user = await User.create({ name, email, password });

  if (userExisits) {
    res.status(401);
    throw new Error("User already registred");
  } else {
    res.status(201).json({ id: user._id, name: user.name, email: user.email });
  }
});

// @desc        Authenticate user/Set token
// route        POST api/users/auth
// @access      Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "User login!" });
});

// @desc        User logout/Delete token
// route        POST api/users/logout
// @access      Public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "Logout user!" });
});

// @desc        User profile
// route        GET api/users/profile
// @access      Private
const userProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "User profile!" });
});

// @desc        Update user profile
// route        PUT api/users/profile
// @access      Private
const updateProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "update user profile!" });
});

export { authUser, registerUser, logoutUser, userProfile, updateProfile };
