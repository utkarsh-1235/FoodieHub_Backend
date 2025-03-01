const RestaurantModel = require('../Models/RestaurantSchema');

const addRestaurant = async(req, res)=>{
    try{

    }catch(err){
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}