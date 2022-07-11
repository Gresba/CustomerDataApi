import mongoose from "mongoose"

const mConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect("mongodb://localhost:27017/CustomerData", mConfig);

let db = mongoose.connection;

db.on("connected", () => console.log("Connected to CustomerData Db"));
db.on("disconnected", () => console.log("Disconnected from the database"));
db.on("error", (err) => console.log(err));

export default db;
