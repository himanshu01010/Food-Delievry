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


app.get("/api/login",cors(),(req,res)=>{

})

app.post("/api/login",async(req,res)=>{
    const {email,password,name} = req.body 

    try {
        const check = await userModel.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }
        
    } catch (error) {
        res.json("notexist")
        
    }
})


app.post('/api/signup', async(req,res)=>{
    const {name,email,password} = req.body

    const data={
        name:name,
        email:email,
        password:password
    }
    try {
        const newUser = await userModel.findOne({email:email});
        // res.status(201).json(newUser);
        if(newUser){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await userModel.insertMany([data])
        }
    } catch (error) {
        // console.error('Error creating user:',error);
        // res.status(500).json({error:'Internal server error'});
        res.json("notexist")
        
    }
});

app.listen(5000,()=>{console.log("the server port is running in 5000")})