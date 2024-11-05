//Define port 
const port = 4000;
//import depedency
const express = require("express");
//create app instance
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
//Include path from express server 
const path = require("path");
const cors = require("cors");
app.use(express.json());
app.use(cors());

// Database connection with MongoDB

mongoose.connect("mongodb+srv://anjaliajithkumar22:AlJ67wUWmx7T5v2h9@cluster0.trx2n.mongodb.net/e-commerce?retryWrites=true&w=majority");

//API creation
app.get("/",(req,res)=>{
    res.send("Express app is running");
})
//image storage engine
const storage = multer.diskStorage({
    destination: './upload'
})
app.listen(port,(error)=>{
    if(!error){
        console.log("server running on port", port);
    }else{
        console.log("some error", error);
    }
})
