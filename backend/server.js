import express from "express";
import dotenv from "dotenv";
import { router } from "./routes/userRoute.js";
import { errorHandler, notFound } from "./middleware/errMiddleware.js";
import { connectDB } from "./database/connectDB.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use("/api/users", router);
app.get("/", (req, res) => res.send("Server is ready!"));

app.use(notFound);
app.use(errorHandler);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening to port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
