const User = require("../../models/client/user");

const signIn = (req, res) => {
	const { signInEmail, signInPassword } = req.body;
	if (!signInEmail || !signInPassword) {
		res.send("please fill the right details");
	}

	User.users.find({ Email: req.body.signInEmail });
};
const signUp = (req, res) => {
	// console.log("signUp called");
	// console.log(req.body);
	// res.status(300).send("signUP called");
	// console.log(req.body);
	User.users.find({ Email: req.body.signUpEmail }, async (err, foundUser) => {
		if (foundUser.length > 0) {
			// console.log(foundUser);
			res.send({ messsage: "sorry email-exits" });
		} else {
			let { signUpName, signUpEmail, signUpPassword } = req.body;
			let newUser = new User.users({
				name: signUpName,
				Email: signUpEmail,
				password: signUpPassword,
			});
			await newUser.save();
			// newUser.

			res.send({
				message: "registered successufully",
				data: "okay login now",
				yourUniqueId: newUser.id,
			});
		}
	});
};
module.exports = { signIn, signUp };
