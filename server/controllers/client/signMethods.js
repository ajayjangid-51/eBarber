const userCollection = require("../../models/client/user");

const signIn = async (req, res) => {
	console.log(`the signin Details are := ${req.body}`);
	try {
		userCollection.find({ email: req.body.email }, async (err, foundUser) => {
			if (foundUser.length > 0) {
				if (foundUser[0].password == req.body.password) {
					const { password, ...otherDetails } = foundUser[0]._doc;
					res.status(200).json(otherDetails);
				} else {
					res.status(400).send({ message: "incorred password" });
				}
			} else {
				res.status(400).send({ message: "sorry you are not registered" });
			}
		});
	} catch (err) {
		console.log(`error occured at sigin backend`);
	}
};
const signUp = (req, res) => {
	console.log("signUp called");

	// console.log(req.body);

	// res.status(300).send("signUP called");
	// console.log(req.body);
	userCollection.find(
		{ email: req.body.email },
		// mtlb after finding-process yeh 2nd-paramter-wala-function-call ya mtlb callback hojayega.
		async (err, foundUser) => {
			if (foundUser.length > 0) {
				// console.log(foundUser);
				res.send({ messsage: "sorry email already registered" });
			} else {
				const { userName, email, password } = req.body;
				try {
					const newUser = new userCollection({
						userName: userName,
						email: email,
						password: password,
					});
					const newUserSaved = await newUser.save();
					// newUser.
					console.log("hello good 😀");
					res.status(200).json(newUserSaved);

					// res.send({
					// 	message: "registered successufully",
					// 	data: "okay login now",
					// 	yourUniqueId: newUser.id,
					// });
				} catch (err) {
					console.log(`some error occured during sigup... at backend.${err}`);
				}
			}
		}
	);
};
module.exports = { signIn, signUp };
