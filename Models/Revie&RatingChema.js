const {Schema, model} = require('mongoose');

const RatingSchema = new Schema({
    rating:{
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comments :{
        type: String,
        required: true,
        minLength: 10,
        maxLength: 200
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    dish: {
        type: Schema.Types.ObjectId,
        ref: 'Dish',
        required: true
    },
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
},{
    timestamps: true
})

const ReviewRatingModel = model('reviewrating',RatingSchema);
module.exports = ReviewRatingModel;