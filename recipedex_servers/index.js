
const dotenv = require("dotenv");
const express = require('express');
const mongoose = require("mongoose");
const appRoute = require('./routes/app');
const http = require('http');
const cors = require('cors')

const router = express();


router.use(cors())
dotenv.config();


router.use('/', appRoute);

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