const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
  res.send("Notification Service Running");
});

app.post("/notify",(req,res)=>{
  res.json({
    success:true,
    message:"Email Notification Sent"
  });
});

app.listen(3005,()=>{
  console.log("Notification Service on 3005");
});