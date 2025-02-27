const User = require('../Models/userSchema')

const signUp = async(req, res)=>{
    try{
        const {user, email, password} = req.body;

    }
    catch(err){
        res.status(401).json({
            error: err.message
        })
    }
}

module.exports = {signUp};
