import { Router } from "express";
import { createUser, loginUser, verifySession } from "../controllers/auth.controller";

const authRouter=Router()

authRouter.post("/register",createUser)
authRouter.post("/login",loginUser)
authRouter.get("/verify-session",verifySession)

export default authRouter