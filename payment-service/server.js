const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
  res.send("Payment Service Running");
});

app.post("/pay",(req,res)=>{
  res.json({
    success:true,
    message:"Payment Successful"
  });
});

app.listen(3004,()=>{
  console.log("Payment Service on 3004");
});