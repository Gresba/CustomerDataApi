# CustomerDataApi

## **About**

This project focuses on creating a RESTful api using express, storing data on Mongodb Atlas with mongoose and hosting the server on Heroku.

The data stored is fake customer data and also payment cards data.

The API is implements all CRUD functionalities for the data stored.

## **Introduction**

**Base Url**: `https://customerdataapi.herokuapp.com/api`

### **Customers**

**End-points**

- `GET /customers` - Get all customers\n
- `GET /customers/:id` - Get a customer by their id
- `POST /customers` - Add a new customer
- `PUT /customers/:id` - Update some information about a customer with their id
- `DELETE /customers/:id` - Delete a customer with their id

**Customer Object**
```
{
  "_id": "62d6feb172e53403a3c454d1",
  "Name": "Paul Kim",
  "Email": "paki@gmail.com",
  "AmountSpent": 43330,
  "Cards": ["62cc8bba640b694cad6d569b"],
  "__v": 0
}
```

### **Cards**

**End-points**

- `GET /cards` - Get all card
- `GET /cards/:id` - Get a card by their id
- `POST /cards` - Add a new card
- `PUT /cards/:id` - Update some information about a card with their id
- `DELETE /cards/:id` - Delete a card with their id

**Card Object**
```
{
  "_id": "62d6feb072e53403a3c454cb",
  "Card_Number": "4384-5439-4234-5442",
  "Expiration": "06/29",
  "CVV": 324,
  "Card_Type": "Visa",
  "__v": 0
}
```
