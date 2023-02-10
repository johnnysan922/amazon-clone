const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("STRIPE SECRET KEY GOES HERE");
//  client secret^

// API

// APP config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());
// sends data and passes it in json format

// API routes
app.get("/", (request, response) => response.status(200).send('hello world'));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Received! for this amount (last two digits are cents)>>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",  //change to any currency country code you want
    });

    //OK response - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen command
exports.api = functions.https.onRequest(app);

// EXAMPLE API ENDPOINT(obtained after running `firebase emulators:start`):
// http://127.0.0.1:5001/clone-1f7fc/us-central1/api