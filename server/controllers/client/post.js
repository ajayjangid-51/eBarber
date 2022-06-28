const postModel = require("../../models/client/post");
const userModel = require("../../models/client/user");
// 1. createPost
const createPost = async (req, res) => {
	const newPost = new postModel(req.body);
	try {
		if (await userModel.findById(req.body.userId)) {
			const savedNewPost = await newPost.save();
			res.status(200).json({ savedNewPost });
		} else res.status(400).send("user not exits:");
	} catch (err) {
		res.status(500).json({ msg: "sorry occured in saving newPost", err });
	}
};
// 2. getPost or mtlb readPost
//   2.1 getPost by post's Id
const getPostById = async (req, res) => {
	const { postId } = req.params;
	postModel.findById(postId, (err, data) => {
		if (err) res.status(500).json({ msg: "server error", err });

		res.status(200).json({ data });
	});
	// const post = await postModel.findById(postId);
	// res.json({ post });
};
//   2.2 get all Posts of a user by user's Id
const getPostsByUserId = (req, res) => {};
// 3. updatePost
const updatePost = async (req, res) => {
	const { postId } = req.params;
	try {
		const newPost = await postModel.findByIdAndUpdate(
			postId,
			{ $set: req.body },
			{ new: true }
		);
		res.status(200).json({ newPost });
	} catch (err) {
		res.status(500).json({ msg: "error in updating Post", err });
	}
};

// 4. deletePost
const deletePost = async (req, res) => {
	const { postId } = req.params;
	try {
		await postModel.findByIdAndDelete(postId);
		res.status(200).json({ msg: "okay post deleted" });
	} catch (err) {
		res.status(500).json({ msg: "err in deleting post", err });
	}
};

// get timeline-posts from a user(by its userId):-
const userTimeline = async (req, res) => {
	const { userId } = req.params;
	try {
		const user = await userModel.findById(userId);
		console.log({ user });
		const userPosts = await postModel.find({ userId: user._id });
		const userFriendsPosts = await Promise.all(
			user.followings.map((e) => {
				return postModel.find({ userId: e });
			})
		);
		userPosts.concat(...userFriendsPosts);
		res.status(200).json(userPosts);
	} catch (err) {
		res.status(500).json({ msg: "err occured in usertimeline", err });
	}
};

// like or Dislike post:-
const likeDislikePost = async (req, res) => {
	const { postId } = req.params;
	const { userId } = req.body;
	try {
		const post = await postModel.findById(postId);
		if (post.likes.includes(userId)) {
			await post.updateOne({ $pull: { likes: userId } });
			res.status(200).json({ msg: "post disliked" });
		} else {
			await post.updateOne({ $push: { likes: userId } });
			res.status(200).json({ msg: "post liked" });
		}
	} catch (err) {
		res.status(500).json({ msg: "err in like dislike post", err });
	}
};

module.exports = {
	createPost,
	getPostById,
	getPostsByUserId,
	updatePost,
	deletePost,
	userTimeline,
	likeDislikePost,
};
