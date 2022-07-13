import mongoose from "mongoose"
import Customer from "../models/Customer.js"

export const getCustomers = (req, res) => {
    Customer.find()
        .then((customers) => {
            res.json(customers)
            console.log("Got customers")
        })
        .catch((error) => { 
            req.status(500).json({message: error.message});
            console.error(error)
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

export const createCustomer = (req, res) => {
    Customer.create(req.body)
        .then((customer) => {
            res.status(200).json(customer)
            console.log("Successfully Created a customer")
        })
        .catch(error => {
            console.error(error)
            res.json({message: error.message})
        })
}

export const updateCustomer = (req, res) => {
    const id = req.params.id;
    Customer.findByIdAndUpdate(id, req.body)
        .then(() => {
            console.log("Successfully updated card")
            res.status(200).json(req.body)
        })
}

export const deleteCustomer = (req, res) => {
    const id = req.params.id;
    Customer.findByIdAndDelete(id)
        .then(customer=> {
            if(customer)
            {
                console.log("Customer deleted " + id)
                res.send("Deleted card" + id)
            }else
                throw new Error("Could not deleted customer " + id)
        })
        .catch(err => {
            console.log(err.message)
            res.status(500).json({error: err.message})
        })
}   
