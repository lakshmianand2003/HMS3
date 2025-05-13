const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  doctorName: String,
  date: String,
  status: { type: String, enum: ["pending", "accepted", "rejected"], default: "pending" },
});

module.exports = mongoose.model("Appointment", appointmentSchema);