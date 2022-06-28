const router = require("express").Router();

const {
	createConversation,
	getConversations,
	getConversationBoth,
} = require("../../controllers/client/conversation");
router.post("/", createConversation);
router.get("/:userId", getConversations);
router.get("/:userOneId/:userTwoId:", getConversationBoth);

module.exports = router;
