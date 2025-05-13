const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");
const Message = require("../models/Message");
const Doctor = require("../models/Doctor");
const User = require("../models/User");

router.get("/appointments", async (req, res) => {
  const appointments = await Appointment.find();
  res.json(appointments);
});

router.post("/set-status", async (req, res) => {
  const { appointmentId, status } = req.body;
  await Appointment.findByIdAndUpdate(appointmentId, { status });
  res.send("Status Updated");
});

router.get("/doctors", async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
});

router.post("/add-doctor", async (req, res) => {
  const { name, specialization } = req.body;
  const doc = new Doctor({ name, specialization });
  await doc.save();
  res.send("Doctor Added");
});

router.get("/messages", async (req, res) => {
  const messages = await Message.find().populate("userId", "username");
  res.json(messages);
});

router.post("/add-admin", async (req, res) => {
  const { username, password } = req.body;
  const admin = new User({ username, password, role: "admin" });
  await admin.save();
  res.send("Admin Added");
});

module.exports = router;