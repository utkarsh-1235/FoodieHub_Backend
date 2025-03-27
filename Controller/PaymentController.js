const paymentModel = require('../Models/PaymentSchema');
const Razorpay = require('razorpay');
const userModel = require('../Models/userSchema');
const orderModel = require('../Models/OrderSchema');

const razorpay = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET
})

const createPayment = async(req, res)=>{
    try{
  const {userId, amount, paymentSignature, paymentMethod} = req.body;

  if(!userId || !amount || !paymentSignature || !paymentMethod){
    res.status(400).json('All the fields required');
  }

  const user = await userModel.findById(userId);
  if(!user){
    return res.status(401).json('User not exist');
  }
  const payment = new paymentModel({
     user: {
        name: user. name,
        email: user.email
     },
     paymentId: paymentSignature,
     amount: amount,
     paymentMethod: paymentMethod

  })
  await payment.save();

  res.status(200).json({
    success: true,
    payment
  })

    }catch(err){
        console.log(err);
   res.status(500).json({
     status: false,
     message: err.message
   })
    }
}

module.exports = {
             createPayment
}