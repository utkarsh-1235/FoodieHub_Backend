const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const orderSchema = new Schema({

},{
    timestamps: true
})

const orderModel = model('Order',orderSchema);
module.exports = orderModel;