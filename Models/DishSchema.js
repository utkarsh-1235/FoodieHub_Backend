const {model, Schema} = require('mongoose');

const DishSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    rating:{
        type: String
    }
},{
    timestamps: true
})

const DishModel = model('dish', DishSchema);
module.exports = DishModel;