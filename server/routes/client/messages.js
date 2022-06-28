const router = require("express").Router();
const {
	getAllMessagesofPair,
	addMessage,
} = require("../../controllers/client/message");

router.post("/", addMessage);
router.get("/:conversationId", getAllMessagesofPair);

module.exports = router;
