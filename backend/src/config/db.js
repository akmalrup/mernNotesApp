import mongoose from "mongoose"




export const connectDB = async() => {


    try {
        //put database name right before ? after .net
       await mongoose.connect("mongodb+srv://ar2346_db_user:hP0CsvNeACcH5iJk@cluster0.uaywk7b.mongodb.net/notes_db?appName=Cluster0")
        console.log("MONGODB CONNECTED SUCCESSFULLY")
    } catch (error){

        console.error("Error connecting to MongoDB on PORT: 5001", error)
        process.exit(1) //exit with failture 
    }
}