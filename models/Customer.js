import mongoose from "mongoose"
import Card from "./Card.js"

const Schema = mongoose.Schema;

const CustomerSchema = mongoose.model("customers", {
    Name: String,
    Email: String,
    AmountSpent: Number,
    Cards: [Schema.Types.ObjectId, "cards"] 
})

export default CustomerSchema;
