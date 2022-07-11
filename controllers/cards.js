import mongoose from "mongoose"
import Card from "../models/Card.js"

export const getCards = (req, res) => {
    Card.find()
        .then((cards) => res.json(cards))
        .catch((error) => {
            console.error(error);
            res.status(500).json({error: error.message});
        })
}

export const getCard = (req, res) => {
    const id = req.params.id;
    Card.findById(id)
        .then((cards) => {
            if(cards)
                return res.json(cards)
            res.status(404).json({message: "Card Not Found!"})
        })
        .catch((error) => {
            console.error(error)
            res.status(500).json({error: error.message});
        })
}

export const createCard = (req, res) => {
    Card.create(req.body)
        .then(() => {
            console.log("Successfully created card")
            res.status(201).json(req.body)
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({error: error.message});
        })
}

export const updateCard = (req, res) => {
    const id = req.params.id;
    Card.findByIdAndUpdate(id, req.body)
        .then(() => {
            console.log("Success fully updated card")
            res.status(200).json(req.body)
        })
}

export const deleteCard = (req, res) => {
    const id = req.params.id;
    Card.findByIdAndDelete(id)
        .then((card) => {
            if(card)
            {
                console.log("Card deleted" + id);
                res.send("Deleted Card" + id):
            }   
            else
                throw new Error("Card Not Found")
        })
        .catch(error => {
            console.log(error.message)
            res.status(500).json({error: error.message})
        })
}
