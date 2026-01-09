import { Router } from "express";
import { createUser, loginUser, verifySession } from "../controllers/auth.controller";
import { verifyJwt } from "../middlewares/auth.middleware";

const authRouter=Router()

authRouter.post("/register",createUser)
authRouter.post("/login",loginUser)
authRouter.get("/verify-session",verifyJwt,verifySession)

export default authRouter