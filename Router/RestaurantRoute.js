const express = require('express');
const { addRestaurant } = require('../Controller/RestaurantController');

const restaurantRoute = express();

restaurantRoute.post('/add',addRestaurant);

module.exports = restaurantRoute;