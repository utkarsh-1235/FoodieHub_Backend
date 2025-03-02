const express = require('express');
const dbConnect = require('./Config/db');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const userRoute = require('./Router/userRouter')
const cartRoute = require('./Router/CartRoute');
const app = express();
const Port = process.env.PORT;

app.use(cors({ origin: [process.env.FRONTEND_URL], credentials: true }));
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/users',userRoute);
app.use('/api/carts',cartRoute);

app.listen(Port,async()=>{
    await dbConnect();
    console.log(process.env.FRONTEND_URL)
    console.log(`Server is running on ${Port}`);
})