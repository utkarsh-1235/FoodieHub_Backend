const express = require('express');
const {CreateCart, getUserCart, DeleteItemsFromCart} = require('../Controller/CartController')

const cartRoute = express();

cartRoute.post('/createCart',CreateCart);
cartRoute.get('/:userId',getUserCart);
cartRoute.post('/delete',DeleteItemsFromCart);


module.exports = cartRoute;