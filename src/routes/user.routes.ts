import { Router } from "express";
import { verifyJwt } from "../middlewares/auth.middleware";
import { getProfile } from "../controllers/user.controller";

const userRouter = Router()

userRouter.get("/profile",verifyJwt,getProfile)

export default userRouter