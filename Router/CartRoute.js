const express = require('express');
const {CreateCart} = require('../Controller/CartController')

const cartRoute = express();

cartRoute.post('/createCart',CreateCart);


module.exports = cartRoute;