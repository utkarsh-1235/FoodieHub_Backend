const express = require('express');
const { addRestaurant, getAllRestaurant } = require('../Controller/RestaurantController');

const restaurantRoute = express();

restaurantRoute.post('/add',addRestaurant);
restaurantRoute.get('/all',getAllRestaurant);

module.exports = restaurantRoute;