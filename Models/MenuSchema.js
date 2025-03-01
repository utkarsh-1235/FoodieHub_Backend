const {Schema, model, SchemaType} = require('mongoose');

const MenuSchema = new Schema({
    dish: {
        type: SchemaType.Types.ObjectId,
        ref: 'Dish',
        required: true
    },
    availability:{
         type: Boolean,
         required: true
    },
    options: [{
         name: {
            type: String
         },
         description: {
            type: String
         },
         priceAdjustment: {
             type: Number
         }
    }],
    restaurants: [{
        restaurant:{
            type: Schema.Types.ObjectId,
            ref: 'Restaurant',
            required: true
        }
    }],
    review:{
        rating:{
           type: Schema.Types.ObjectId,
           ref: 'Reviewrating',
        }
    }
},{
    timestamps: true
})

const MenuModel = model('menu',MenuSchema);
module.exports = MenuModel;