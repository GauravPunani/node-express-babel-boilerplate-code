import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
const cors = require("cors");

// import mongoose connection file
import "./mongoose/connection";

// // Create Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Start the server
app.listen(process.env.PORT, () => {
  console.log("Server started on port 3000");
});
