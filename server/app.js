import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import ServerlessHttp from "serverless-http";

dotenv.config();

const { ENVIRONMENT, MONGODB_LOCAL, MONGODB_PROD, PORT } = process.env;

export const app = express();

//DB Connection
mongoose
  .connect(ENVIRONMENT === "dev" ? MONGODB_LOCAL : MONGODB_PROD)
  .then(() => {
    console.log("Database Connected at :", ENVIRONMENT);
  })
  .catch((err) => {
    console.log("Error at connection in database : ", err);
  });

//Parses the query params from reques url
//The {extended:false} option tells the middleware not to handle complex nested objects in the request body.
//Similar to express.urlencoded, this middleware parses incoming request data but for the format application/json. This format is commonly used for APIs that exchange data in JSON format.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Any domain can hit this backend server
app.use(
  cors((req, callback) => {
    callback(null, {
      origin: true,
    });
  })
);

//Use imported routes

//Reply from server
app.use("/", (req, res) => {
  res.send("Reply from server.");
});

export default ServerlessHttp(app);
