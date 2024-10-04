const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const emailRoute = require("./routes/emailRoute"); // Import the email route

const app = express();

// Middleware
app.use(bodyParser.json()); // Parse incoming JSON data
app.use(cors()); // Enable CORS to allow requests from your React app

// Handle root route ("/") to prevent "Cannot GET /" error
app.get("/", (req, res) => {
  res.send("Welcome to the Email API server!");
});

// Use the email route at "/api/send"
app.use("/api", emailRoute);

// Start the server
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
