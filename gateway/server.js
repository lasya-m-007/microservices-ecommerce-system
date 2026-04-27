const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

/* Home Route */
app.get("/", (req, res) => {
  res.send("API Gateway Running");
});

/* Products Route - Connects to Product Service */
app.get('/products', async (req, res) => {
  try {
    const response = await axios.get('http://product-service:3002/products');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Product Service Error" });
  }
});

/* Register Route (POST) */
app.post("/register", async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/register",
      req.body
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "User Service Error" });
  }
});

/* Order Route (POST) */
app.post("/order", async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:3003/order",
      req.body
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Order Service Error" });
  }
});

/* Browser Demo Route - Register */
app.get("/register-demo", (req, res) => {
  res.json({
    success: true,
    message: "Demo User Registered",
    user: {
      name: "Lasya",
      email: "lasya@email.com"
    }
  });
});

/* Browser Demo Route - Order */
app.get("/order-demo", (req, res) => {
  res.json({
    success: true,
    message: "Demo Order Placed",
    order: {
      product: "Laptop",
      user: "Lasya"
    }
  });
});

/* Browser Demo Route - Payment */
app.get("/payment-demo", (req, res) => {
  res.json({
    success: true,
    message: "Payment Successful"
  });
});

/* Browser Demo Route - Notification */
app.get("/notify-demo", (req, res) => {
  res.json({
    success: true,
    message: "Notification Sent Successfully"
  });
});

/* Start Server */
app.listen(3000, () => {
  console.log("Gateway on 3000");
});