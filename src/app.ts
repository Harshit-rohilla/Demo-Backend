import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./routes/auth.routes";
import userRouter from "./routes/user.routes";
import { Request, Response, NextFunction } from "express";


const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.ENVIRONMENT==="dev"?"*":process.env.ORIGIN, credentials: true }));

// routes
app.use("/api/v1/auth",authRouter)
app.use("/api/v1/user",userRouter)


// Global error handler
app.use((err:unknown,req:Request,res:Response,next:NextFunction)=>{
    console.log("Error caught in global error handler: ",err);
    if(err instanceof Error){
        res.status(500).json({message:err.message})
    }
    res.status(500).json({message:"Something went wrong"})
})

export default app;
