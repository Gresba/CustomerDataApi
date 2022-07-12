import db from "../db/connection.js";
import Card from "../models/Card.js";
import Customer from "../models/Customer.js";

import cardData from "./cardData.json" assert {type: "json"}
import customerData from "./customerData.json" assert {type: "json"}

const seedData = async () => {

    await db.dropDatabase()

    await Card.insertMany(cardData)
    await Customer.insertMany(customerData)

    console.log("Inserted Data")

    db.close();
}

seedData();
