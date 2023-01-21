//import mongoose

const mongoose = require('mongoose')

//define connection string

mongoose.connect('mongodb://localhost:27017/cart',()=>{
    console.log("connected to MongoDB");
})
//create model to store all products

const Product =mongoose.model('product',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }
})

//create model to add wishlist products

//create a collection in mongodb
//create a model
const Wishlist=mongoose.model('Wishlist',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    image:String,
})


module.exports = {
    Product,
    Wishlist
  }