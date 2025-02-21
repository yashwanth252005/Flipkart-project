import express, { Router } from 'express';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import DefaultData from './default.js';
import router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

app.get('/', (req, res) => {
    res.send('Hello World!');
});
const port = process.env.PORT || 3000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URL || `mongodb+srv://${USERNAME}:${PASSWORD}@ecommerceweb.ulup6.mongodb.net/EcommerceWeb?retryWrites=true&w=majority&appName=EcommerceWeb`;


Connection(URL);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    // const path = require('path');
    // app.get('*', (req, res) => {
    //     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    // });
}

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

DefaultData();


