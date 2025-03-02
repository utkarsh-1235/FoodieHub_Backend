const CartModel = require('../Models/CartSchema');
const DishModel = require('../Models/DishSchema');
const Restaurantmodel = require('../Models/RestaurantSchema');
const userModel = require('../Models/userSchema');

const CreateCart = async(req, res)=>{
    try{
        
        const cartData = req.body.cartData.cartData;
        const {userId, totalPrice,items, totalItems} = cartData;
        
     console.log(userId, totalPrice,items, totalItems)


        if(!userId || !items || items.length === 0 ){
            return res.status(401).json('All  the fields are required');
        }

        const user = await userModel.findById(userId);
        if(!user){
           return res.status(402).json('user not found');
        }
        
        // const restaurant = await restaurantIds.map((restaurantId)=> Restaurantmodel.findById({restaurantId}));
        // if(!restaurant){
        //    res.status(403).json('Restaurant not found');
        // }

        const dishes = await Promise.all(items.map(async(item)=>DishModel.findById(item.dishId)));
        console.log('dishes',dishes);

        const invalidDishes = items.filter((item, index) => !dishes[index]);
        console.log("Invalid Dishes:", invalidDishes);
        

        if(invalidDishes.length > 0){
            return res.status(404).json({
                status: false,
                message: 'One or more dishes not found'
            })
        }

        const cart = await CartModel.create({
            user: {
                name: user.name,
                email: user.email
              },
              items: dishIds.map((dish, index) => ({
                dish: {
                  name: dishes[index].name,
                  desc: dishes[index].description,
                  price: dishes[index].price
                },
                quantity: dish.quantity
              })),
              restaurants: [
                {
                  restaurant: restaurantIds.map((restaurantId)=>({
                      name: restaurantId.name,
                      email: restaurantId.email
                  }))
                }
              ],
              status: 'Pending',
              totalPrice: totalPrice,
              totalitem: totalItems,
              added: Date.now
              
        
            })
            await cart.save();

            res.status(200).json({
                success: true,
                message: "Cart created successfully",
                cart
            })
        }

    catch(err){
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
}
    
module.exports = {CreateCart};