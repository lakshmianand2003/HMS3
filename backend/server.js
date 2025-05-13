const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB Connection
const uri = "mongodb://127.0.0.1:27017/Hospital";
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Mongo Error:", err));

// Models
const User = require("./models/User");
const Appointment = require("./models/Appointment");
const Message = require("./models/Message");
const Doctor = require("./models/Doctor");

// Routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
