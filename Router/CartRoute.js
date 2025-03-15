const express = require('express');
const {CreateCart, getUserCart} = require('../Controller/CartController')

const cartRoute = express();

cartRoute.post('/createCart',CreateCart);
cartRoute.get('/:userId',getUserCart);


module.exports = cartRoute;