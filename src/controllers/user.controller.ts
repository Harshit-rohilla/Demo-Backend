import { NextFunction, Request, Response } from "express";
import User from "../models/user.model";

export const getProfile=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const userId=req.userPayload!.id;
        const user=await User.findById(userId).select("-password").lean()
        if(!user){
            return res.status(400).json({message:"User does not exist"})
        }
        return res.status(200).json({userData:user})
    } catch (error) {
        next(error)
    }
}