import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config("..")

mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/csv_example_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

export const conn =  mongoose.connection;