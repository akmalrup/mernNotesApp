import mongoose from "mongoose"




export const connectDB = async() => {


    try {
        //put database name right before ? after .net
       await mongoose.connect(
        
        process.env.MONGO_URL

       );
        console.log("MONGODB CONNECTED SUCCESSFULLY")
    } catch (error){

        console.error("Error connecting to MongoDB on PORT: 5001", error)
        process.exit(1) //exit with failture 
    }
}