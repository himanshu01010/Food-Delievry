import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors';
import userModel from './models/userModel.js';


const app = express()
dotenv.config();
app.use(express.json());
app.use(cors());

const { MONGODB_URI } = process.env;

async function connectToDatabase() {
    try {
        await mongoose.connect(MONGODB_URI ,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connected to MongoDB');
    } catch (error){
        console.error("Error connecting to MongoDB",error);
    }
}

connectToDatabase();


app.post('/api/signup', async(req,res)=>{
    try {
        const newUser = await userModel.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:',error);
        res.status(500).json({error:'Internal server error'});
        
    }
});

app.listen(5000,()=>{console.log("the server port is running in 5000")})