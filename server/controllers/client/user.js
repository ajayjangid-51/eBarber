// api related to user-table(collection) for CRUD-operations(like:- create-user, read(or get)-user , update-user and delete-user from user-table or mtlb user-collection):-
const userCollection = require("../../models/client/user");
// get a user by its id:-
const getUser = (req, res) => {
	const { userId, userName } = req.query;
	try {
		userCollection.findById(userId, (err, data) => {
			if (err) res.send("sorry error at findbyId");
			const { password, updatedAt, ...other } = data._doc;
			res.send(other);
		});
	} catch (err) {
		res.status(500).send("sorry server-error");
	}
};

// get friends(or mtlb his/her "followings") of user(by its Id):-
const getFriends = (req, res) => {
	try {
		const user = userCollection.findById(req.params.userId, (err, data) => {
			// Promise.all( takes a array of promises) and yeh all()-fn tab resolve hoga jab eske andar pass ki gayi sari promises resolve hojayegi.
			Promise.all(
				data.followings.map((e) => {
					return userCollection.findById(e);
				})
			).then((arr) => {
				let friendsList = [];
				arr.map((e) => {
					const { _id, userName, profilePic } = e;
					friendsList.push({ _id, userName, profilePic });
				});
				res.status(200).json(friendsList);
			});
		});
	} catch (err) {
		res.status(500).json({ err: "sorry error occred at getFriends.." });
	}
};

// follow a user(mtlb apn client-user ki Id and targe-user ki Id leke client-user ki followings meh ess targe-get ki Id ko push krdenge.)
/*🔥 this "followUser-function" is actually a also example of "callback-hell" 🔥*/
const followUser = (req, res) => {
	const targetUserId = req.params.targetUserId;
	const clientUserId = req.body.userId;
	try {
		if (clientUserId !== targetUserId) {
			userCollection.findById(targetUserId, (err1, data1) => {
				userCollection.findById(clientUserId, (err2, data2) => {
					if (!data1.followers.includes(data2._id)) {
						data1.updateOne({ $push: { followers: data2._id } }, (err, daa) => {
							data2.updateOne(
								{ $push: { followings: data1._id } },
								(err, data) => {
									res.status(201).json({
										msg: "user has been followed",
										data,
										data1,
										data2,
									});
								}
							);
						});
					} else {
						res.status(400).json("you are already following this user");
					}
				});
			});
		}
	} catch (err) {
		res.status(500).json("sorry error  at followUsre...");
	}
};

// unfollow a user:-
const unfollowUser = async (req, res) => {
	const targetUserId = req.params.targetUserId;
	console.log(targetUserId);
	const clientUserId = req.body.userId;
	console.log("clientUserId is =", clientUserId);
	try {
		if (clientUserId !== targetUserId) {
			const targetUser = await userCollection.findById(targetUserId);
			const clientUser = await userCollection.findById(clientUserId);
			if (targetUser.followers.includes(clientUserId)) {
				await clientUser.updateOne({ $pull: { followings: targetUser._id } });
				await targetUser.updateOne({ $pull: { followers: clientUser._id } });
				res.status(200).json("okay user has benn unfollowed");
			} else {
				res.status(403).json("you dont follow this user");
			}
		}
	} catch (err) {
		res.status(500).json({ msg: "error occured", error: err });
	}
};

// udpating user by its Id:-

const updateUser = async (req, res) => {
	const userId = req.params.userId;
	try {
		userCollection.findByIdAndUpdate(
			userId,
			{
				$set: req.body,
			},
			{ new: true },
			(err, doc, reso) => {
				if (err) res.status(500).json({ msg: "sorry eror occured", err });
				res.status(200).json({ doc });
			}
		);
	} catch (err) {
		res.status(500).send("serevr errorr");
	}
};

// deleting User by its Id,
const deleteUser = (req, res) => {
	const userId = req.params.userId;
	try {
		userCollection.findByIdAndDelete(userId, (err, doc, reso) => {
			res.status(200).json({ msg: "okay this user deleted", doc });
		});
	} catch (err) {
		res
			.status(500)
			.json({ msg: "sorry some server error in deleting user", err });
	}
};
const getAllUsers = async (req, res) => {
	const allUsers = await userCollection.find();
	res.status(200).json({ allUsers });
};
module.exports = {
	getUser,
	getFriends,
	followUser,
	unfollowUser,
	updateUser,
	deleteUser,
	getAllUsers,
};
