const express = require('express');
const authRoute = express();

const {signUp} = require('../Controller/userController');

authRoute.post('/register',signUp);

module.exports = authRoute;
