const CartModel = require('../Models/CartSchema');
const DishModel = require('../Models/DishSchema');
const Restaurantmodel = require('../Models/RestaurantSchema');
const userModel = require('../Models/userSchema');

const CreateCart = async(req, res)=>{
    try{
        console.log(req.body);
        const cartData = req.body.cartData.cartData;
        const {userId, totalPrice,items, totalItems} = cartData;
        
     console.log(userId, totalPrice,items, totalItems)

     if(!userId || !items || items.length === 0 ){
        return res.status(401).json('All  the fields are required');
    }

    const user = await userModel.findById(userId);
    console.log('user',user);
    if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
    }

    let existingCart = await CartModel.findOne({'user.email':userId});

    const dishIds = items.map((item)=>item.dishId);

    const dishes = await DishModel.find({_id: {$in: dishIds}})

    if (!dishes || dishes.length === 0) {
        return res.status(404).json({ success: false, message: "Dishes not found" });
    }


    const formattedItems = items.map(item => {
        const dish = dishes.find(d=>d._id.toString() === item.dishId);
        return{
            dish:{
                name: dish.name,
                price: dish.price
            },
            quantity: item.qty
        }
    }).filter(item => item !== null);
   
    if (formattedItems.length === 0) {
        return res.status(400).json({ success: false, message: "No valid items found" });
    }


    if(existingCart){
            existingCart.items.push(...items);
            existingCart.totalitems += totalItems;
            existingCart.totalPrice += totalPrice;
        }else{
            
            existingCart = new CartModel({
                user: { name: user.name, email: user.email },
                items: formattedItems,      
                totalPrice,
                totalitems: totalItems
            });
        }

        await existingCart.save();

                res.status(200).json({
                    success: true,
                    message: "Cart created successfully",
                    cart: existingCart
                })

        }

    catch(err){
        console.log(err);
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
}


const getUserCart = async(req, res)=>{
    try{
      const {userId} = req.params;   

      if(!userId){
        return res.status(401).json('Please send any User for getting Cart details')
      }
     
      const user = await userModel.findById(userId);

      if(!user){
        return res.status(403).json('User not found');
      }

      const carts = await CartModel.findOne({'user.email': user.email}).lean();
      if(!carts){
        return res.status(402).json('Please Create Cart for this user no carts found');
      }
    
      res.status(200).json({
        status: true,
        cartItems: Array.isArray(carts.items) ? carts.items : [],
      })
    }catch(err){
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
}
    
module.exports = {CreateCart,
                  getUserCart
};