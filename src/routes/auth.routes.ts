import { Router } from "express";
import { createUser, loginUser, verifySession } from "../controllers/auth.controller";
import { verifyJwt } from "../middlewares/auth.middleware";
import { logoutUser } from "../controllers/auth.controller";
import { sanitizeBody } from "../middlewares/sanitize.middleware";

const authRouter=Router()

// authRouter.post("/register",createUser)
authRouter.route("/register").post(sanitizeBody,createUser)
authRouter.post("/login",sanitizeBody,loginUser)
authRouter.post("/logout",verifyJwt,logoutUser)
authRouter.get("/verify-session",verifyJwt,verifySession)


export default authRouter