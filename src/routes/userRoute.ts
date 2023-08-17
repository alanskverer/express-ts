import express from "express";
import {getUsers, createUser} from "../controllers/userController";

export const userRoute = express.Router();

userRoute.get("/users", getUsers);
userRoute.get("/users/new", createUser);