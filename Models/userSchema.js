const mongoose = require('mongoose');
const{Schema, model} = mongoose;


const userSchema = new Schema({
    name:{
        type: String,
        required: [true, 'user name is required'],
        minLength: [5, 'user name must be atleast 5 characters'],
        maxLength: [50, 'user name must be maximum 50 characters'],
        trim: true,
        lowercase: true
    },
    email:{
        type: String,
        required: [true, 'user email is required'],
        unique: true,
        lowercase: true,
        unique: [true, 'already registerd'],
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please fill in a valid email address',
          ]
    },
    pasword:{
        type: String,
        required: [true, 'password is required'],
        minLength:[8, 'password must be at least 8 characters'],
        select: false,
    },
    address:[
        {
            state: String,
            district: String,
            pinCode: String,
            city: String,
            address: String
        }
    ],
    forgotPasswordToken:{
        type: String
    },
    forgotPasswordTokenExpiry:{
        type: Date
    },
    
},{
    timestamps: true
})

const userModel = model('user',userSchema);
module.exports = userModel;