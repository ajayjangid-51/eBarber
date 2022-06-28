const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
	{
		userName: {
			type: String,
			required: true,
			min: 4,
			max: 20,

			unique: true,
		},
		email: {
			type: String,
			required: true,
			max: 50,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		profilePic: {
			type: String,
			default: "",
		},
		coverPic: {
			type: String,
			default: "",
		},
		followers: {
			type: Array,
			default: [],
		},
		followings: {
			type: Array,
			default: [],
		},
	},
	{ timestamps: true }
);

const userCollection = mongoose.model("users", userSchema);
module.exports = userCollection;
