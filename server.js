import dotenv from 'dotenv';
import express from "express";
import morgan from 'morgan';
import connectDB from './config/db.js';
<<<<<<< HEAD
import authRoute from './routes/authRoute.js'
import productRoutes from "./routes/productRoutes.js"
=======
import authRoute from './Routes/authrouter.js'
import productrouter from './Routes/productrouter.js'
import cors from "cors";
// import productRoutes from "./routes/productRoutes.js"
>>>>>>> 24081ed (Initial files)


//config file
dotenv.config();

//database connect
connectDB();


//rest object
const app=express()

//routes
<<<<<<< HEAD
app.use('/api/vi/auth',authRoute)
app.use('/api/vi/product',productRoutes)

app.use(express.json())
app.use(morgan('dev'))

// rest api

=======
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/product',productrouter)



//Middleware
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))


// rest api
>>>>>>> 24081ed (Initial files)
app.get('/',(req,res)=>{
    res.send("<h1>welcome to Ecommerce Pet Store</h1>")
})

const PORT=process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server is Running on Mod ${process.env.DEV_MOD} on port ${PORT}`)
})