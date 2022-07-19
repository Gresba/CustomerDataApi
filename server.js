// Open connection with the database 
import db from "./db/connection.js";
import routes from "./routes/index.js";

// import from express
import express from "express";

const app = express();

// Allows the app to process json
app.use(express.json());

app.use("/", routes);

// Listen for different requests
db.on("connected", () => {
  console.clear();
  app.listen(process.env.PORT || 4000, () => {
    console.log(
      `Express server running in development on: http://localhost:${PORT} `
    );
  });
});
