const express = require("express");
const app = express();

const products = [
  {id:1,name:"Laptop",price:50000},
  {id:2,name:"Phone",price:25000},
  {id:3,name:"Headphones",price:3000}
];

app.get("/", (req,res)=>{
  res.send("Product Service Running");
});

app.get("/products",(req,res)=>{
  res.json(products);
});

app.listen(3002,()=>{
  console.log("Product Service on 3002");
});