const bcrypt = require("bcrypt");
const userCollection = require("../../models/client/user");
const signIn = async (req, res) => {
	try {
		const loginUser = await userCollection.findOne({ email: req.body.email });
		!loginUser && res.status(400).json({ msg: "user not registerd " });

		const checkPassword = await bcrypt.compare(
			req.body.password,
			loginUser.password
		);
		if (!checkPassword) res.status(400).json({ msg: "incorred password" });
		else {
			const { password, ...otherDetails } = loginUser._doc;
			res.status(200).json({ otherDetails });
		}
	} catch (err) {
		console.log("signIn throw error is :", err);
	}
};
module.exports = { signIn };
