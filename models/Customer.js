import mongoose from "mongoose"
import Card from "./Card.js"

const Schema = mongoose.Schema;

const CustomerSchema = mongoose.model("Customer", {
    Name: String,
    Email: String,
    AmountSpent: Number,
    Cards: [{ type: Schema.Types.ObjectId, ref: "cards" }]
})

export default CustomerSchema;
