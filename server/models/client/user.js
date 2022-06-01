/* const mongoose = require("../../configs/db"); // here mongoose mtlb it is "monogodb conn"

const userSchema = new mongoose.Schema({
	// _id: "automaticallyGivenBymongodbId"
	name: String,
	Email: String,
	mobileNo: Number,
	password: String,
});

const users = mongoose.model("users", userSchema);

module.exports = {
	users,
};

*/

const mongoose = require("../../configs/db");
const userSchema = new mongoose.Schema(
	{
		userName: {
			type: String,
			required: true,
			// unique: true,
		},
		email: {
			type: String,
			required: true,
			// unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		profilePic: {
			type: String,
			default: "",
		},
	},
	{ timestamps: true }
);

const userCollection = mongoose.model("users", userSchema);
module.exports = userCollection;
