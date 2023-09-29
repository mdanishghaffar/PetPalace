import dotenv from 'dotenv';
import express from "express";
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoute from './routes/authRoute.js'
import productRoutes from "./routes/productRoutes.js"


//config file
dotenv.config();

//database connect
connectDB();


//rest object
const app=express()

//routes
app.use('/api/vi/auth',authRoute)
app.use('/api/vi/product',productRoutes)

app.use(express.json())
app.use(morgan('dev'))

// rest api

app.get('/',(req,res)=>{
    res.send("<h1>welcome to Ecommerce Pet Store</h1>")
})

const PORT=process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server is Running on Mod ${process.env.DEV_MOD} on port ${PORT}`)
})