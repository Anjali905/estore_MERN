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

const { type } = require("os");
const { log } = require("console");
app.use(express.json());


// Database connection with MongoDB
mongoose.connect("mongodb+srv://anjaliajithkumar22:60ihIUyJ098pmlrH@cluster0.trx2n.mongodb.net/e-commerce?retryWrites=true&w=majority")
    .then(() => {
        console.log('Connected to MongoDBd');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });


//API creation
app.get("/",(req,res)=>{
    res.send("Express app is running");
})
//image storage engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
//upload functiona 
const upload = multer({storage: storage})
app.use('/images',express.static('upload/images'))
//creat end point for uploading images
app.post("/upload",upload.single('product'),(req,resp)=>{
   
    resp.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

//schema for creating producst

const Product = mongoose.model('Product',{
    id:{
        type: Number,
        required:true,
        unique: true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    },
})

app.post('/addproduct', async (req, res) => {
    try {
        let products = await Product.find({});
        let id;
        if(products.length > 0){
            let last_product_array = products.slice(-1);
            let last_product= last_product_array[0];
            id = last_product.id + 1;
        }else{
            id = 1;
        }
        const product = new Product({
            id: id,
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price
        });
        console.log(product);
        await product.save();
        console.log("Product savedd");
        res.json({
            success: true,
            name: req.body.name
        });
    } catch (error) {
        console.error("Error saving product:", error);
        res.status(500).json({ success: false, error: "Failed to save product" });
    }
});
//creating API for deleting products
app.post('/removeproduct',async(req,resp)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("removed");
    resp.json({
        success:true,
        name:req.body.name
    })
})
app.listen(port,(error)=>{
    if(!error){
        console.log("server running on port", port);
    }else{
        console.log("some error", error);
    }
})
