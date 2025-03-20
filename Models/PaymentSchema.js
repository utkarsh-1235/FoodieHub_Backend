 const mongoose = require('mongoose');
 const {Schema, model} = mongoose;

const paymentSchema = new Schema({
   user: {
     userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
     },
     name:{
        type: String,
        required: true
     },
     email: {
        type: String,
        required: true
     }
   },
//    orderId: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     ref: 'Order'
//    },
   paymentId: {
    type: String,
    required: true
   },
   amount: {
    type: Number,
    required: true
   },
   currency: {
    type: String,
    default: 'INR'
   },
   status: {
    type: String,
    enum: ['pending', 'succeed', 'failed', 'refunded'],
    default: 'pending'
   },
   paymentMethod: {
    type: String,
    required: true
   }
},{
    timestamps: true
})

const paymentModel = model('payment',paymentSchema);
module.exports = paymentModel;