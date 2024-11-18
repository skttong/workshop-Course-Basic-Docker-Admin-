const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

// Connect to MongoDB
const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/mydatabase";
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// Example API
app.get("/", (req, res) => {
  res.send("Hello from Backend!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
