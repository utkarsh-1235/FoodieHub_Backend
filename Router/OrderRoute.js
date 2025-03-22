const express = require('express');
const { createOrder } = require('../Controller/OrderController');

const orderRoute = express();

orderRoute.post('/add',createOrder);

module.exports = orderRoute;