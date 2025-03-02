const RestaurantModel = require('../Models/RestaurantSchema');

const addRestaurant = async(req, res)=>{
    try{
        const {} = req.body;

    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}