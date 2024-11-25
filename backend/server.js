const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const users = require("./routes/api/users");
// const bookings = require('./routes/api/bookings'); // Import the register route

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/carDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Middleware to parse JSON bodies
app.use(express.json());

// Use the cors middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

// Use the register route
app.use("/api/users",users);
// app.use("/api/bookings",bookings);


app.get("*", (req, res) => {
  const path = require("path");
res.sendFile(path.join(__dirname, "public/index.html"));
});

// Default error handler middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
};
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
