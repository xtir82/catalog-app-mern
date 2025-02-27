import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import connectDB from './database.js';
import cookieParser from 'cookie-parser';

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

const DB = connectDB();

app.use(cors({
    origin: 'http://localhost:5173/',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization','Cache-Control','Expires','Pragma'],
    credentials: true
}));

app.use(cookieParser);
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});