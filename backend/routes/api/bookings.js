 const express = require("express");
 const router = express.Router();
 const Booking = require("../models/bookingModel");

 //Route to save booking data
router.post("/api/bookings", async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ message: "Booking saved successfully" });
  } catch (error) {
    console.error("Error saving booking", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;