const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { messaging } = require("firebase-admin");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);
const app = express();
app.use(
  cors({
    origin: true,
  })
);
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({
    message: "success!",
  });
});

app.post("/payment/create", async (req, res) => {
    let total = req.body.total;
    if (total > 0) {
        console.log("Payment is made", total)
        res.send(total)
    }
})


exports.api = onRequest(app);
