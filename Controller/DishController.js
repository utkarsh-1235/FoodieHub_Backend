const DishModel = require('../Models/DishSchema')

const getAllDish = async(req,res)=>{
    try{
        
        const dishes = await DishModel.find()
                                       .populate('restaurants')
                                       .exec();
        console.log(dishes);

        res.status(200).json({
            success: true,
            data: dishes
        })

    }catch(err){
        return res.status(500).json({
            status: false,
            message: err.message
        })
    }
}

module.exports = {
    getAllDish
}