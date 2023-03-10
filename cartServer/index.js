//server creation

//1.import express
 const express = require('express');

 //import cors

 const cors=require('cors');

 //2. using express create an appl

 const app= express();

 //3.setup port number
 app.listen(3000,()=>{
    console.log('express server listening on the port 3000');
 })

 //4.use json parser for server appl
 app.use(express.json());

 //using cors specify origin to the server
 app.use(cors({
   origin:'http://localhost:4200'
 }))

 const dataService = require('./services/dataService')

//api to get all products
app.get('/all-products',(req,res)=>{
  dataService.getAllProducts().then(result=>{
    res.status(result.statusCode).json(result)
  })

  //api to addtowishlist

app.post('/addtowishlist',(req,res)=>{
  console.log(req.body);
  dataService.addtowishlist(req.body.id,req.body.title,req.body.price,req.body.description,req.body.image)
  .then((result)=>{
      res.status(result.statusCode).json(result)
    }
  )

})

//api for getting wishlist product

app.get('/getwishlist',(req,res)=>{
  dataService.getwishlist().then(
    (result)=>{
      res.status(result.statusCode).json(result)
    }
  )
})
})

//delete

app.delete('/deletewish/:id',(req,res)=>{
dataService.deleteitem(req.params.id).then(
  (result)=>{
    res.status(result.statusCode).json(result)
  }
)
})