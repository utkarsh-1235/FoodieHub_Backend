const RestaurantModel = require('../Models/RestaurantSchema');

const addRestaurant = async(req, res)=>{
    try{
    
        const{id, name, email, phoneNumber, description, cuisine, img} = req.body.restaurant;
        const userId = req.body.userid;

        console.log(id, name, rating, cuisine,userId, email, phoneNumber, description)

        if(!id && !name &&!rating && !cuisine && !img && !userId){
            return res.status(401).json("All fields are required");
        }

        const restaurant = await RestaurantModel.create({
             
        })
        await restaurant.save();

        res.status(200).json({
            success: true,
            data: restaurant
        })


    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}
module.exports = {addRestaurant};