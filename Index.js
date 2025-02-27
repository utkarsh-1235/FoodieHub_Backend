const express = require('express');
const dbConnect = require('./Config/db');
require('dotenv').config();
const userRoute = require('./Router/userRouter')
const app = express();
const Port = process.env.PORT;

app.use(express.json());
app.use('/api/users',userRoute);

app.listen(Port,async()=>{
    await dbConnect();
    console.log(`Server is running on ${Port}`);
})