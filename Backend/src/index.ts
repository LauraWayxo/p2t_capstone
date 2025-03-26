import express, { Request, Response } from "express"; 
import cors from "cors"; 
import "dotenv/config"; 
import mongoose from "mongoose"; 
import myUserRoute from "./routes/MyUserRoutes";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)

const app = express(); 
app.use(express.json()); 
app.use(cors()); 

// app.get("/test", (req: Request, res: Response) => {
//     res.json({ message: "Welcome to the Backend!" }); 
// });
app.use("/api/my/user", myUserRoute); 

app.listen(7000, () => {
    console.log("Server is running on localhost:7000");
});