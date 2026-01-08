import { NextFunction, Request, Response } from "express";
import User, { IUser } from "../models/user.model";
import { HydratedDocument } from "mongoose";
import { comparePassword, hashPassword } from "../utils/password";
import { generateJwt } from "../utils/jwt";
import { cookieOption } from "../utils/cookie";



export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      name,
      email,
      password,
      gender,
      dob,
    }: {
      name: string;
      email: string;
      password: string;
      gender: string;
      dob?: string;
    } = req.body;
    if (!name || !email || !password || !gender) {
      return res.status(400).json({ message: "Data Missing!" });
    }
    const genderOptions = ["Male", "Female", "Other"];

    if (!genderOptions.includes(gender)) {
      return res.status(400).json({ message: "Invalid Gender" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password length must be greater than 6" });
    }

    const user=await User.findOne({email})
    if(user){
        return res.status(400).json({message:"User already exist"})
    }

    // encrypt password
    const encryptedPassword = await hashPassword(password)

    const userObject: {
      name: string;
      email: string;
      password: string;
      gender: string;
      dob?: Date;
    } = { name, email, password: encryptedPassword, gender };

    // if date is provided by user then add it else leave it, as it is optional
    if (dob) {
      userObject.dob = new Date(dob);
    }
    await User.create(userObject);
    return res.status(200).json({message:"User Created"})
  } catch (error) {
    next(error);
  }
}

export const loginUser = async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const {email,password}:{email:string,password:string}=req.body
        if(!email || !password){
            return res.status(400).json({message:"Invalid Credentials"})
        }
        const user:HydratedDocument<IUser>|null=await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"Invalid Credentials"})
        }
        const isPasswordCorrect=await comparePassword(user.password,password)
        if(!isPasswordCorrect){
            return res.status(400).json({message:"Invalid Credentials"})
        }
        const token=generateJwt(user._id.toString())

        return res.status(200).cookie("token",token,cookieOption).json({message:"Logged in successfully"})
    } catch (error) {
        next(error)
    }
}
