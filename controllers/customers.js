import mongoose from "mongoose"
import Customer from "../models/customer.js"

export const getCustomers = (req, res) => {
    Customer.find()
        .then((customers) => {
            res.json(customers)
        })
        .catch((error) => { 
            req.status(500);
            console.error(error)
            res.json({message: error.message})
        })
};

export const getCustomer = (req, res) => {
    const id = req.params.id;
    Customer.findById(id)
        .then(customer => {
            res.json(customer)
        })
        .catch(error => {
            console.error(error)
            res.json({message: error.message})
        })
}
