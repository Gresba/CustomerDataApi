// Open connection with the database 
import db from "./db/connection.js";

// import from express
import express from "express";

const app = express();

const PORT = 3000;

// Allows the app to process json
app.use(express.json());

// Listen for different requests
app.listen(PORT, () => {
    console.log("Listening on port " + PORT + "...");
})
