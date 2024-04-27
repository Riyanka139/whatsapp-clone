import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './routes/index.js';
const app = express();

const PORT = 4000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(router);

mongoose.connect("mongodb://0.0.0.0:27017/test").then(() => {
    console.log("DB connected");

    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT} port`);
    });
});