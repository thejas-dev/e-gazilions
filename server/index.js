const express = require('express')
require('dotenv').config;
const mongoose = require('mongoose');
let app = express()

app.get('/',(req,res)=>{
    res.send("Hello World")
})

const PORT = 3000 || process.env.PORT;

try{
	mongoose.connect("mongodb+srv://thejashari:gazilions@gazilions.zv47zcb.mongodb.net/?retryWrites=true&w=majority",{
		useNewUrlParser:true,
		useUnifiedTopology:true,
	}).then(()=>{
		console.log("db connected successfully")
	}).catch((err)=>{
		console.log(err);
	});
}catch(ex){
	console.log(ex)
}

app.listen(PORT,()=>{
    console.log('PORT is running on port 3000')
})