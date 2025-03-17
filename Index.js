const express = require('express');
const dbConnect = require('./Config/db');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const userRoute = require('./Router/userRouter')
const cartRoute = require('./Router/CartRoute');
const restaurantRoute = require('./Router/RestaurantRoute');
const dishRoute = require('./Router/DishRoute');
const paymentRoute = require('./Router/PaymentRoute');
const Razorpay = require('razorpay');
const app = express();
const Port = process.env.PORT;
const razorpay = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET
})

app.use(cors({ origin: [process.env.FRONTEND_URL], credentials: true }));

app.use(bodyParser.json({limit: '10mb'}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/users',userRoute);
app.use('/api/carts',cartRoute);                                                            -+
app.use('/api/restaurants', restaurantRoute);
app.use('/api/dishes',dishRoute);
app.use('/api/payments',paymentRoute);

app.listen(Port,async()=>{
    await dbConnect();
    console.log(`Server is running on ${Port}`);
})