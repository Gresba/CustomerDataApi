import db from "../db/connection.js";
import Card from "../models/Card.js";

import cardData from "./cardData.json" assert {type: "json"}

const seedData = async () => {

    await db.dropDatabase()

    await Card.insertMany(cardData)

    console.log("Inserted Data")

    db.close();
}

seedData();
