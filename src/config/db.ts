import mongoose from "mongoose"

export const connectDB=async()=>{
    const URI=process.env.MONGODB_URI
    if(!URI){
        throw new Error("mongodb uri not available")
    }
    await mongoose.connect(URI)
    console.log("DB Connected!");
    
}