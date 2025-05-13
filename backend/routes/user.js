const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");
const Message = require("../models/Message");

router.post("/book", async (req, res) => {
  const { userId, doctorName, date } = req.body;
  const appointment = new Appointment({ userId, doctorName, date });
  await appointment.save();
  res.send("Appointment Booked");
});

router.post("/message", async (req, res) => {
  const { userId, content } = req.body;
  const msg = new Message({ userId, content });
  await msg.save();
  res.send("Message Sent");
});

module.exports = router;