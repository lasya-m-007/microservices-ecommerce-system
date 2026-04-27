const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
  res.send("User Service Running");
});

app.post("/register",(req,res)=>{
  const {name,email} = req.body;

  res.json({
    success:true,
    message:"User Registered",
    user:{name,email}
  });
});

app.listen(3001,()=>{
  console.log("User Service on 3001");
});