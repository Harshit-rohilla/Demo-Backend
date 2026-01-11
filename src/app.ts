import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./routes/auth.routes";
import userRouter from "./routes/user.routes";
import { Request, Response, NextFunction } from "express";
import helmet from "helmet";
import dotenv from "dotenv";
dotenv.config();


const app = express();
console.log("printing origin: ",process.env.ORIGIN);


// middlewares
app.use(cors({ origin:process.env.ORIGIN, credentials: true }));
app.use(express.json({limit:"16kb"}));
app.use(cookieParser());

// prevent xss from header
app.use(helmet());

// routes
app.use("/api/v1/auth",authRouter)
app.use("/api/v1/user",userRouter)


// Global error handler
app.use((err:unknown,req:Request,res:Response,next:NextFunction)=>{
    console.log("Error caught in global error handler: ",err);
    if(err instanceof Error){
        return res.status(500).json({message:err.message})
    }
    return res.status(500).json({message:"Internal server error"})
})

export default app;
