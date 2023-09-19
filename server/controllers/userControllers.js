const User = require("../models/userModel");
const bcrypt = require("bcryptjs")

module.exports.register = async(req,res,next) => {
	try{
		const {email,name,password} = req.body;
		const emailCheck = await User.findOne({email});
		if(emailCheck)
			return res.json({msg:"account already exist",status:false});

		const hashedPassword = await bcrypt.hash(password,10);
		const user = await User.create({
			email,name,password:hashedPassword
		})
		delete user.password;
		return res.json({status:true, user})
	}catch(ex){
		next(ex)
	}
}

module.exports.login = async(req,res,next) => {
	try{
		const {email,password} = req.body;
		const user = await User.findOne({email});
		if(!user){
            return res.json({msg:"Incorrect email or password",status:false});
        }
		const isPasswordValid = await bcrypt.compare(password,user.password);
		if(!isPasswordValid)
			return res.json({msg:"Incorrect email or password",status:false});
		delete user.password;
		return res.json({status:true, user})
	}catch(ex){
		next(ex)
	}
}