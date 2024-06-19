import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import japaneseRouter from "./routes/Japanese.js";
import bodyParser from "body-parser";
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (reg, res) => {
  res.send("api is working");
});

mongoose.set("strictQuery", false);
const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB is connected");
  } catch (error) {
    console.log("MongoDB error");
  }
};

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use("/api/v1/japanese", japaneseRouter);

app.listen(port, () => {
  connectdb();
  console.log("listening on port: " + port);
});
