import { Request, Response } from "express";
import database from "./srt/database";
import ClientsRoutes from "./srt/app/routes/ClientsRoutes";
import DebitsRoutes from "./srt/app/routes/DebitsRoutes";
import express from "express"
import cors from "cors";

const app = express();
const env = require('dotenv');
const bodyParser = require('body-parser');
env.config({ path: `.env.${process.env.NODE_ENV}` });

database.then(() => {
    app.use(express.json());
    app.use(cors());
    app.use([ClientsRoutes, DebitsRoutes]);
    app.listen(process.env.HOST_PORT, () => {
        console.log(`Server Ready, await connection on Port ${process.env.HOST_PORT}`);
    });
}).catch(err => {
    console.log(err);
})