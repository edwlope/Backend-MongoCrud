import 'dotenv/config'
import express from "express";
import mongoose from "mongoose";
import productRoute from "./routes/product.route.js";

const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoute);


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 5001, () => {
      console.log("connected to mongodb");
      console.log(`Server is running on port 5001`);
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
