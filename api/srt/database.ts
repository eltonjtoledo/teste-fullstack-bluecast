import mongoose from "mongoose";
const env = require('dotenv');
env.config({path: `.env.${process.env.NODE_ENV}`});

const connection = mongoose.connect(`${process.env.CONNECTION_DB}`)

export default connection;