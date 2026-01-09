import bcrypt from "bcrypt"

export const hashPassword=async(pass:string)=>{
    const hashedPassword=await bcrypt.hash(pass, 8)
    return hashedPassword
}

export const comparePassword=async(storedPass:string,userPass:string)=>{
    const isPasswordCorrect=await bcrypt.compare(userPass,storedPass)
    return isPasswordCorrect
}