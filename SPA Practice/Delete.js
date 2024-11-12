// Route params to greet a user with "hello <name>"

import mongoose from "mongoose";

app.get("/greet:name", (request, response) => {
    const name = request.params.name;
    response.send(
        JSON.stringify({
            greet: `Hello ${name}`
        })
})

// Write a middleware function that logs every request method url and timeStamp and move to next middleware

const middleware = (request, response, next) => {
    console.log(`${request.methods} ${request.url} ${new Date().toLocaleDateString("en-us")}`);
    next();
};
app.use(middleware);



// Create a basic Mongoose schema for a product with fields of name, price, and in stock/not in stock for no SQL database

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        required: true
    }
});

// Using query string write a get request for a route of weather/city and accept a unit as a query string and responds with weather and city
// with the city will be dynamic and the unit will be dynamic
// Bonus : and a default to the unit. Provide fallback for unit

import { response } from "express";

const city = request.params.city;

let unit = "sunny";

let



