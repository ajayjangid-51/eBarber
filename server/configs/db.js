const mongoose = require("mongoose");

mongoose
	.connect("mongodb://localhost:27017/ebarberDb")
	.then((e) => {
		console.log("connected to db");
	})
	.catch((err) => {
		console.log("sorry some eror occured with database");
	});

module.exports = mongoose;
