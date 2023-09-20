const express = require('express');
require('dotenv').config;

const mongoose = require('mongoose');
const  app = express()
const cors = require('cors');

app.use(express.json());

const userRoutes = require("./routes/userRoutes")
app.use(cors());

app.use('/api/auth',userRoutes);

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/gi',(req,res)=>{
	res.send("Hey world")
})

const PORT = 3333 || process.env.PORT;

try{
	mongoose.connect("mongodb+srv://thejashari:thejashari@e-gazilion.evimg4p.mongodb.net/?retryWrites=true&w=majority",{
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