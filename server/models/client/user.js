const mongoose = require("../../configs/db"); // here mongoose mtlb it is "monogodb conn"

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
