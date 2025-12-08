const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const oscRoutes = require("./routes/oscRoutes");
const ieeeRoutes = require("./routes/ieeeRoutes");
const votingRoutes = require("./routes/votingRoutes");
const basketballRoutes = require("./routes/basketballRoutes");
const cricketRoutes = require("./routes/cricketRoutes");
const natrajRoutes = require("./routes/natrajRoutes");
const panacheRoutes = require("./routes/panacheRoutes");

const { initializeDatabase: initVoting } = require("./controllers/votingController");
const { initializeDatabase: initBasketball } = require("./controllers/basketballController");
const { initializeDatabase: initCricket } = require("./controllers/cricketController");
const { initializeDatabase: initNatraj } = require("./controllers/natrajController");
const { initializeDatabase: initPanache } = require("./controllers/panacheController");

const app = express();

app.use(cors());
app.use(express.json());

// Request logger
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    console.log("Body:", req.body);
    next();
});

// Initialize database tables
initVoting();
initBasketball();
initCricket();
initNatraj();
initPanache();

// ROUTES MUST COME BEFORE listen()
app.use("/api/auth", authRoutes);
app.use("/api/osc", oscRoutes);
app.use("/api/ieee", ieeeRoutes);
app.use("/api/voting", votingRoutes);
app.use("/api/basketball", basketballRoutes);
app.use("/api/cricket", cricketRoutes);
app.use("/api/natraj", natrajRoutes);
app.use("/api/panache", panacheRoutes);

app.listen(5000, () => console.log("SERVER running on port 5000"));

// ---------------- DEPLOYMENT ----------------
const path = require("path");

// Serve static files from React app
app.use(express.static(path.join(__dirname, "../client/dist")));

// The catch-all handler: for any request that doesn't match an API route,
// send back the index.html file so React Router can handle it.
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

