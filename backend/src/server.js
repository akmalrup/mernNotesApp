import express from "express"; 
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";

//why do we need apis? 


const app = express();

connectDB(); 


app.use("/api/notes", notesRoutes);

app.listen(5001, () => {
    console.log("server stated on PORT: 5001");
});

