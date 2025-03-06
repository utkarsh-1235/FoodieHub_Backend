const RestaurantModel = require('../Models/RestaurantSchema');

const addRestaurant = async(req, res)=>{
    try{
    
        const{name, email, address, phoneNumber, description, cuisine, img} = req.body.restaurant;
        // const userId = req.body.userid;
        

        console.log(name,cuisine,address, email, phoneNumber, description)

        if(!name || !email || !address || !phoneNumber || !cuisine || !img || !description){
            return res.status(401).json("All fields are required");
        }

        const existingRestaurant = await RestaurantModel.findOne({name, address, email});

        if(existingRestaurant){
            return res.status(402).json("Restaurant already exist");
        }
          
        const restaurant = await RestaurantModel.create({
            name ,
            address  ,
            email ,
            description ,
            phoneNumber ,
            cuisineType: cuisine,
            image : img,

        })
        
        console.log(restaurant);

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

const getAllRestaurant = async(req,res)=>{
    try{
        const restaurants = await RestaurantModel.find();
        if(!restaurants){
            return res.status(401).json('There is no any single restaurant');
        }
         console.log(restaurants);
        res.status(200).json({
            success: true,
            data: restaurants
        })
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}
module.exports = {addRestaurant,
                  getAllRestaurant
};