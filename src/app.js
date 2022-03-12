import express from 'express';
import cors from 'cors';
import productRoute from './routes/product';
import morgan from 'morgan';
import mongoose from 'mongoose';

const app = express();
// middleware
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

// routes
app.use("/api", productRoute)

// connection db
mongoose.connect("mongodb://localhost:27017/we16310")

// connect
const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server của bạn đang chạy cổng ", PORT);
});