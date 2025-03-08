const express = require('express');

const {getAllDish} = require('../Controller/DishController')
const dishRoute = express();

dishRoute.get('/all',getAllDish);
module.exports = dishRoute;