import mongoose from "mongoose"

const mConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const connectionString = process.env.DB_URL || "mongodb://localhost:27017/customerdata"

mongoose.connect(connectionString, mConfig);

let db = mongoose.connection;

db.on("connected", () => console.log("Connected to CustomerData Db"));
db.on("disconnected", () => console.log("Disconnected from the database"));
db.on("error", (err) => console.log(err));

export default db;
