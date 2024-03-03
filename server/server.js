import express from 'express'
import * as mongooose from "mongooose";
const app = express()
// const mongoose = require('mongoose')
// const cors = require("cors")

// app.get("/api", (req,res)=>{

//     const user = [{
//         id: 1,
//         name: "kulu",
//         content: "this my name"
//     },
//     {
//         id: 2,
//         name: "kanu",
//         content: "this is my real name"
//     },
//     {
//         id:3,
//         name:"nanu",
//         content:"this is my name of household"
//     }
// ];

// res.send(user);
// })

app.listen(5000,()=>{console.log("the server port is running in 5000")})