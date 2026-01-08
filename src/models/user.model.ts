import mongoose from "mongoose";

export interface IUser{
    name:string,
    email:string,
    gender:"Male"|"Female"|"Other",
    password:string,
    dob?:Date
}

const userSchema=new mongoose.Schema<IUser>({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    gender:{
        type:String,
        required:true,
        enum:["Male","Female","Other"]
    },
    password:{
        type:String,
        required:true,
    },
    dob:{
        type:Date,
    }
},{timestamps:true})

const User=mongoose.models.User || mongoose.model<IUser>("User",userSchema)
export default User