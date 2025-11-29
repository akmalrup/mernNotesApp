import express from "express"; 
import notesRoutes from "./routes/notesRoutes.js"
//why do we need apis? 


const app = express();

app.use("/api/notes", notesRoutes);

app.listen(5001, () => {
    console.log("server stated on PORT: 5001");
});

