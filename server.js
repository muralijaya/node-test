'use strict'
const express = require("express");
// const mongoose = require("mongoose");
// const Users = require("./schema.js")
const app = express();
const port = 3300;



// mongoose.connect("mongodb://localhost/database", (err)=>
// {
// if(err) {
// 	console.log(" DB is not connected")
// }
// console.log("DB is connected")

// })


app.listen("3300", (err)=> {
	if(err){
		console.log("port is not connected")
	}
	console.log("port is connected " + port)
});

