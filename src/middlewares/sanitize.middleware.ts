import { NextFunction, Request, Response } from "express";
import { sanitizeInput } from "../utils/sanitize";


//* sanitize user's body
export const sanitizeBody=(req:Request,res:Response,next:NextFunction)=>{
    if(req.body){
        for(const key in req.body){
            if(typeof req.body[key]==="string"){
                req.body[key]=sanitizeInput(req.body[key])
            }
        }
    }
    next()
}