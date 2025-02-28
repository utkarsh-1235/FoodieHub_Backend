const express = require('express');
const authRoute = express();

const {signUp, login} = require('../Controller/userController');

authRoute.post('/register',signUp);
authRoute.post('/login',login);

module.exports = authRoute;
