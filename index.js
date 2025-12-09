// Create a web server to listen to incoming requests
// Use express.js to enable it

// using "type: "commonjs"
// const express = require("express");

// using "type: "module"
import express from "express";
import os from 'os';
import cors from "cors";

const PORT = 8888;          // create a custom port that the app listens to
const HOST = "127.0.0.1";   // domain (127.0.0.1 === localhost)
const OS = os;              // logging the platform running the server
const ENV = "DEV";          // set the mode of development of this project (not related to .env, DEV, UAT, PROD)

const app = express();      // invoke express library to be consumed to run the web server
app.use(cors());            // allow our app to use cors library
app.use(express.json());    // middleware to handle JSON data

// Create endpoints that this application listens to

app.get("/", (req, res) => {       // Listen to a GET request (root directory of the application "/")
    res.statusCode = 200;
    const msg = "Hello FSD Learner. Running Node.js with Nodemon"
    res.send(msg);
});

app.get("/about", (req, res) => {
    res.statusCode = 200;
    const msg = "About this website."
    res.send(msg);
});

app.post("/login", (req, res) => {
    const pseudoUsername = "user1";             // pseudo username
    const pseudoPassword = "pwd";               // pseudo password
    const { username, password } = req.body;    // obtain username and password as an object
    if (username === pseudoUsername && password === pseudoPassword)
        return res.status(200).send({msg: "You have logged in successfully"});
    return res.status(403).send({msg: "Permission denied. Please try again."});
});

// Set up the app to listen via PORT and HOST (http://127.0.0.1:8888)
app.listen(PORT, HOST);
console.log(`Running service on: ${HOST}:${PORT} in os ${OS.platform()}.`);