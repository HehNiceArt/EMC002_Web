import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';

const app = express();
const PORT = process.env.PORT || 3001;
dotenv.config();
app.use(cors());
app.use(express.json());

if (!process.env.MONGODB_URI) {
    console.error('MONGODB_URI is not defined! Please set it in your environment variables.');
    process.exit(1);
}
mongoose.connect(process.env.MONGODB_URI)
    .then(() => { console.log('Connected to MongoDB') })
    .catch(err => console.log(err));

app.use('/api', authRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});