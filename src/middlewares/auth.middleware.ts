import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"
import { AuthJwtPayload } from "../types/jwt";

export const verifyJwt=(req:Request,res:Response,next:NextFunction)=>{
    try {
        const token = req.cookies.token
        if(!token){
            return res.status(401).json({message:"Token Missing"})
        }
        const payload=jwt.verify(token,process.env.JWT_SECRET as string) as AuthJwtPayload
        req.userPayload=payload
        next()

    } catch (error) {
        return res.status(401).json({message:"Invalid or expired token"})
    }
}