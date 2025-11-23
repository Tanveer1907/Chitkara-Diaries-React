const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const oscRoutes = require("./routes/oscRoutes");
const ieeeRoutes = require("./routes/ieeeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES MUST COME BEFORE listen()
app.use("/api/auth", authRoutes);
app.use("/api/osc", oscRoutes);
app.use("/api/ieee", ieeeRoutes);

app.listen(5000, () => console.log("SERVER running on port 5000"));
