const User = require('../Models/userSchema')

const cookieOption = {
    maxAge: 7*24*60*60*1000, //7days
    httpOnly: true,
    secure: true
}
const signUp = async(req, res)=>{
    try{
        
        const {name, email, password} = req.body;
        
        console.log(name,email, password);

        if(!name || !email || !password){
           return res.status(401).json('Every Field is required');
        }

        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(403).json('Email already exist');
        }
        
        const user = await User.create({
            name: name,
            email: email,
            password: password
        })
           

        
        if(!user){
            return res.status(400).json('User registration failed, please try again')
          }
         
          await user.save();

          user.password = undefined;
          const token = await user.jwtToken();
          res.cookie('token', token, cookieOption)

          res.status(200).json({
            status: true,
            data: user,
            token: token
          })
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            error: err.message
        })
    }
}

module.exports = {signUp};
