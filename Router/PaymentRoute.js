const express = require('express');
const { createPayment } = require('../Controller/PaymentController');

const paymentRoute = express();

paymentRoute.post('/create',createPayment);

module.exports = paymentRoute;