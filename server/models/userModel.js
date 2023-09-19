const mongoose = require('mongoose')

const userSchema =  new mongoose.Schema({
	email:{
		type: String,
		min:3,
		max:40,
	},
	name:{
		type: String,
		required: true,
		max:40,
	},
	password:{
		type:String,
		default:'',
        required:true 
	},
	},
	{
		timestamps:true,
	}
)

module.exports = mongoose.model("Users",userSchema)