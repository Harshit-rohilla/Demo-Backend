import app from "./app"
import dotenv from "dotenv"
import {connectDB} from "./config/db"
dotenv.config()

const runServer=async()=>{
    try {
        await connectDB()
        app.listen(process.env.PORT||5000,()=>{console.log("app is running on port: ",process.env.PORT)})  
    } catch (error) {
        if(error instanceof Error){
            console.log(error.message);
        }
        process.exit(1)
        
    } 
}
runServer()