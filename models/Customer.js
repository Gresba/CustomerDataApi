import mongoose from "mongoose"
import Card from "./Card.js"

const CustomerSchema = mongoose.model("Customer", {
    Name: String,
    Email: String,
    AmountSpent: Number,
    Cards: [Card]
})

export default CustomerSchema;
