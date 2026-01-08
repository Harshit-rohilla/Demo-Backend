import jwt from "jsonwebtoken"
import { StringValue } from "ms";

export const generateJwt=(userID:string)=>{
    const JWT_SECRET = process.env.JWT_SECRET;
    const JWT_EXPIRY = process.env.JWT_EXPIRY;

    if (!JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined");
    }
    if (!JWT_EXPIRY) {
        throw new Error("JWT_EXPIRY is not defined");
    }
    const token = jwt.sign({id:userID},JWT_SECRET,{expiresIn:JWT_EXPIRY as StringValue})
    return token
}