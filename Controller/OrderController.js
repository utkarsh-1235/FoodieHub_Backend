const orderModel = require('../Models/OrderSchema');

const createOrder = async(req,res)=>{
    try{
        
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

const getUserOrder = async(req, res)=>{
   try{
    const {userId}= req.body.userId;

    if(!userId){
        return res.status(400).json('User id required');
    }

    const order = await orderModel.findOne({'user.userId': userId});

    if(!order){
        return res.status(401).json('No Orders found please order something');
    }

    return res.status(200).json({
        succes: true,
        message: 'Orders fetched succesfully',
        Orders: order
    })

   }catch(err){
    res.status(500).json({
        success: false,
        message: err.message
    })
   }
}

module.exports = {
                   createOrder,
                   getUserOrder
}