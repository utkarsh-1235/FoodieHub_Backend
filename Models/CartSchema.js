const {Schema, model} = require('mongoose');

const CartSchema = new Schema({
    
    user:{
     type: Schema.Types.ObjectId,
     ref: 'User',
     required: true
    },
    items:[{
        dish: {
            type: Schema.Types.ObjectId,
            ref: 'Dish',
            required: true
          },
          quantity:{
            type: Number,
            required: true
          },
          price:{
            type: Number,
            required: true
          }
    }],
    restaurants:[{
        restaurant: {
            type: Schema.Types.ObjectId,
            ref: 'Restaurant',
            required: true
        }
    }],
    status:{
        type: String,
        enum: ['Pending', 'Processing', 'Delivered'],
        default: 'Pending'
    },
    totalPrice:{
        type: Number
    },
    totalitems:{
        type: Number
    },
    added:{
        type: Date,
        default: Date.now
    }
})

const CartModel = model('cart',CartSchema);
module.exports = CartModel;