require("dotenv").config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./config/db");

// Connect DB
connectDB();

const app = express();

// Parses incoming requests (req.body) with JSON
app.use(express.json());

app.use("/api/auth", require("./routes/api/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});