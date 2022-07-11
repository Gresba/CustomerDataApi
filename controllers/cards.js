import mongoose from "mongoose"
import Card from "../models/Card.js"

const getCards = (req, res) => {
    Card.find({})
        .then((cards) => res.json(cards));
        .catch((error) => {
            console.error(error);
            res.status(500).json({error: error.message});
        })
}

const getCharacter = (req, res) => {
    const id = req.params.id;
    Card.findById(id)
        .then((cards) => {
            if(cards)
                return res.json(cards)
            res.status(404).json({message: "Card Not Found!")
        })
        .catch((error) => {
            console.error(error)
            res.status(500).json({error: error.message});
        })
}
