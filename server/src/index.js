import express from "express";
import cors from "cors";
import mongoose from "mongoose";
// import { userRouter } from "./routes/user.js"; // Eliminar o comentar esta línea
import { contactRouter } from "./routes/contact.js"; // Cambiar recipesRouter por contactRouter

const app = express();

app.use(express.json());
app.use(cors());

// app.use("/auth", userRouter); // Eliminar o comentar esta línea
app.use("/contacts", contactRouter); // Cambiar "/recipes" por "/contacts"

mongoose.connect(
  "mongodb+srv://jorgewar13:vXRW6ZKDa9Aitth2@cluster0.laynyev.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => console.log("Connected to MongoDB!"))
.catch(err => console.error("Could not connect to MongoDB:", err));

app.listen(3001, () => console.log("SERVER STARTED!"));
