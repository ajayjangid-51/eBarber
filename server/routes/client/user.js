const router = require("express").Router();
const {
	getUser,
	getFriends,
	followUser,
	unfollowUser,
	updateUser,
	deleteUser,
	getAllUsers,
} = require("../../controllers/client/user");

router.get("/getallUser", getAllUsers);

router.get("/", getUser);
router.get("/friends/:userId", getFriends);
router.put("/follow/:targetUserId", followUser);
router.put("/unfollow/:targetUserId", unfollowUser);
router.put("/update/:userId", updateUser);
router.delete("/delete/:userId", deleteUser);
module.exports = router;
