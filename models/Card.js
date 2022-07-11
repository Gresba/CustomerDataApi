import mongoose from "mongoose"

let Card = new mongoose.Schema({
    "Card_Number": String,
    "Expiration": String,
    "CVV": Number,
    "Card_Type": String
})

export default mongoose.model("cards", Card);
