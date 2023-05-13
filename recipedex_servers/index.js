
const dotenv = require("dotenv");
const express = require('express');
const mongoose = require("mongoose");
const appRoute = require('./routes/app');
const http = require('http');

router.use(cors())
dotenv.config();
const router = express();

router.use('/', appRoute);
const cors = require('cors')

const httpServer = http.createServer(router);

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        httpServer.listen(3000, () => console.log("SERVER"));
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

start();