const mongoose = require("mongoose"); // so toh yaha yeh "const mongoose" meh yeh "mongoose" actually ess mongoose-module-k-class ek instance hai mtlb ek "object" hi hai.
const postSchema = new mongoose.Schema(
	{
		userId: {
			type: String,
			required: 1,
			// ref: "users",
		},
		img: {
			type: String,
			default: "",
		},
		likes: {
			type: Array,
			default: [],
		},
		description: {
			type: String,
			max: 500,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("posts", postSchema);
