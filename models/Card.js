import mongoose from "mongoose"

let Card = new mongoose.Schema({
    "Card_Number": String,
    "Expiration": Date,
    "CVV": Number,
    "Card_Type": String
})

export default mongoose.model("Card", Card);
