import * as dotenv from "dotenv";
dotenv.config();
import app from "./server";

// import mongoose connection file
import "./mongoose/connection";

// Start the server
app.listen(process.env.PORT, () => {
  console.log("Server started on port 3000");
});
