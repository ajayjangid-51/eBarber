const userCollection = require("../../models/client/user");
const bcrypt = require("bcrypt");

const signUp = (req, res) => {
	try {
		userCollection.find({ email: req.body.email }, async (err, data) => {
			if (err)
				res.status(500).send({ serverError: err, msg: "sorry server error" });
			if (data.length > 0) {
				res.status(400).json({ msg: "sorry user already exitst" });
			} else {
				const { userName, email, password, repassword } = req.body;
				if (password !== repassword)
					res.status(400).json({ msg: "password didn't match" });
				const salt = bcrypt.genSaltSync(10);
				const hashedPassword = bcrypt.hashSync(password, salt);
				const newUser = new userCollection({
					userName,
					email,
					password: hashedPassword,
				});
				/*🔥 now here on saving.. some eror may occured bcoz of network-loss or etc.. so for safe side we will put this thing in try-catch. 🔥*/
				try {
					const onSavedNewUser = await newUser.save();
					res
						.status(200)
						.json({ msg: "newUser successfully created", onSavedNewUser });
				} catch (err) {
					res
						.status(500)
						.json({ msg: "sorry network connection problem", err });
				}
			}
		});
	} catch (err) {
		console.log("err occured somewhere in signUp try-catch", err);
	}
};
module.exports = { signUp };
