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
        await product.save();
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
    resp.json({
        success:true,
        name:req.body.name
    })
})
//Creating API for getting all products
app.get('/allproducts',async(req,res)=>{
    let products = await Product.find({});
    res.send(products);
})
//Schema creating for user model
const User = mongoose.model('Users',{
    name:{
        type:String,
        required:true,
    },
    email:{ 
        type:String,
        unique:true,
    },
    password:{   
      type:String,
    },
    cartData:{
        type:Object
    },
    date:{
        type:Date,
        default:Date.now,
    }
    })
    //creating API for adding user
    app.post('/signup',async(req,resp)=>{
      let check = await User.findOne({email:req.body.email});
      if(check){
        return resp.status(400).json({
            success:false,
            errors:"User already exists"
        })
      }
      let cart = {};
      for(let index = 0; index <= 300+ 1;index++){
        cart[index]= 0;
      }
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        cartData: cart
      });
      await user.save();
      const data = {
        user:{
            id:user.id
        }
      }
      const token = jwt.sign(data,'secret_ecom');
      resp.json({success:true,token})

      })
      
   //creating end point for user login
   app.post('/login',async(req,resp)=>{
    let user = await User.findOne({email:req.body.email});
    if(user){
        const passCompare = await req.body.password === user.password; 
        if(passCompare){
            const data = {
                user:{
                    id:user.id
                }
              
            }
            const token = jwt.sign(data,'secret_ecom');
            resp.json({success:true,token});
        }else{
            resp.json({success:false,error:"Wrong Password"});
        }
    }else{
        resp.json({success:false,error:"User not found"});
    }
   })
   //creating end point for new collection
   app.get("/newcollection",async(req,resp)=>{
    let products = await Product.find({});
    let newCollection = products.slice(1).slice(-8);
    resp.send(newCollection);
   })
   //creating end point for popular in women section
   app.get("/popularwomen",async(req,resp)=>{
    let products = await Product.find({category:"women"});
    let popular_in_women = products.slice(0,4);
     resp.send(popular_in_women);
   })
   //creating middleware to fetch user data
   const fetchUser = async(req,resp,next)=>{
       const token = req.header('auth-token');
       if(!token){
           resp.status(401).send({error:"Please authenticate using a valid token"});
       }else{
        try{
            const data = jwt.verify(token,'secret_ecom');
            req.user = data.user;
            next();
        }catch(error){
            resp.status(401).send({error:"Please authenticate using a valid token"});
        }
       }
   }
   //creating end point for adding products to cart
   app.post('/addtocart',fetchUser,async(req,resp)=>{
     let userData = await User.findOne({_id:req.user.id});
     userData.cartData[req.body.id] += 1;
     await User.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
     resp.send("Added to cart successfully");
    })
//creating end point to remove product from cart data
app.post('/removefromcart',fetchUser,async(req,resp)=>{
    let userData = await User.findOne({_id:req.user.id});
    if(userData.cartData[req.body.id] >= 0){
        userData.cartData[req.body.id] -= 1;
        await User.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
        resp.send("Removed from cart successfully"); 
    }
     
})
//creating end point to create cart data
app.post('/getcart',fetchUser,async(req,resp)=>{
    let userData = await User.findOne({_id:req.user.id});
    resp.json(userData.cartData);
})
app.listen(port,(error)=>{
    if(!error){
        console.log("server running on port", port);
    }else{
        console.log("some error", error);
    }
})
