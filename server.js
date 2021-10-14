///////////////////////////////////
//  Import Our Dependecies
///////////////////////////////////
require("dotenv").config()  //  Load .env variables
const express = require("express")  //  Import express
const morgan = require ("morgan")   // Import morgan
const methodOverride = require("method-override")
const mongoose = require("mongoose")

///////////////////////////////////
//  Database Connection
////////////////////-///////////////
//  Setup Inputs for out connect function
const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
//  Establish connection
mongoose.connect(DATABASE_URL, CONFIG)

//  Events for when connection opens/disconnects/errors
mongoose.connection
.on("open", () => console.log("connected to Mongoose"))
.on("close", () => console.log("Disconnected from Mongoose"))
.on("error", (error) => console.log(error))

////////////////////////////////////////////////
//  Create Our Express Application Object
////////////////////////////////////////////////
const app = express()

///////////////////////////////////
//  Middleware
///////////////////////////////////
app.use(morgan("tiny")) //  logging
app.use(methodOverride("_method"))  //  Override for put and delete requeests from forms
app.use(express.urlencoded({extended: true}))   //  Parse urlencoded request bodies
app.use(express.static("public"))   //  Serve files from the public statically

///////////////////////////////////
//  Routes
///////////////////////////////////
app.get("/Days_Until", (req, res) => {
    res.render("index.ejs", {title: "Days Until Index Page"})
})
///////////////////////////////////
//  Server Listender
///////////////////////////////////
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`))

