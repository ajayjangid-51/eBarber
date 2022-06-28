const {
	getPostById,
	getPostsByUserId,
	updatePost,
	deletePost,
	createPost,
	likeDislikePost,
	userTimeline,
} = require("../../controllers/client/post");

// Now here Post- CRUD-operations's API we will implement:-
const router = require("express").Router();

router.post("/createPost", createPost);
router.get("/:postId", getPostById);
router.get("posts/:userId", getPostsByUserId);
router.put("/update/:postId", updatePost);
router.delete("/delete/:postId", deletePost);
router.put("/like/:postId", likeDislikePost);
router.get("/timeline/:userId", userTimeline);
module.exports = router;
