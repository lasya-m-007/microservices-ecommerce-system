const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
  res.send("Order Service Running");
});

app.post("/order",(req,res)=>{
  const {product,user} = req.body;

  res.json({
    success:true,
    message:"Order Placed",
    order:{product,user}
  });
});

app.listen(3003,()=>{
  console.log("Order Service on 3003");
});