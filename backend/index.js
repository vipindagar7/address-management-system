import express from 'express';

import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'

// importing database conneciton file 
import connectToMongo from './db.js';


// importing routes files 
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoute.js';
import supportRoutes from './routes/supportRoutes.js';
import addressRoutes from './routes/addressRoutes.js';
import cookieParser from 'cookie-parser';
//  import logging files and packages
import morgan from 'morgan'
import logger from './logger/index.js'
// getting port from env file
const PORT = process.env.PORT
// creating a new express instance in a constant variable CALLED app
const app = express();


// create a connection to MongoDB
connectToMongo()
// Use morgan to log HTTP requests, integrated with Winston
app.use(
    morgan('combined', {
        stream: { write: (message) => logger.info(message.trim()) },
    })
);

// middlewares 
// Set a timeout for requests
app.use((req, res, next) => {
    req.setTimeout(15000); // Set timeout to 5 seconds
    next();
});
// enable cors middleware
const whitelist = ['http://localhost:3000', 'http://localhost:4000', 'http://192.168.31.114:3000'];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true); // Allow requests with no origin or from whitelisted origins
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));


// Use cookie-parser middleware
app.use(cookieParser());
app.use(express.json())


// routes
app.use('/api/auth', userRoutes)

app.use('/api/admin/', adminRoutes)

app.use('/api/support/', supportRoutes)

app.use('/api/address/', addressRoutes)





app.listen(PORT, () => {
    console.log('listening on port ', PORT, 'with frontend domain ', process.env.DOMAIN);
});