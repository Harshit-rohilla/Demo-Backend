import { Router } from "express";
import { createUser, loginUser, verifySession } from "../controllers/auth.controller";
import { verifyJwt } from "../middlewares/auth.middleware";
import { logoutUser } from "../controllers/auth.controller";

const authRouter=Router()

// authRouter.post("/register",createUser)
authRouter.route("/register").post(createUser)
authRouter.post("/login",loginUser)
authRouter.post("/logout",verifyJwt,logoutUser)
authRouter.get("/verify-session",verifyJwt,verifySession)


export default authRouter