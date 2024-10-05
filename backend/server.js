import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => res.send("Server is ready!"));

app.listen(port, () => console.log(`Server is listening to port ${port}`));
