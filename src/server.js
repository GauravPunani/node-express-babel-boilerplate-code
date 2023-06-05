import express from "express";
import bodyParser from "body-parser";

const app = express();
const cors = require("cors");

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

export default app;
