// conversations- CRUD opeations:-
const conversationModel = require("../../models/client/conversation");
// creating new Conversation:-
const createConversation = async (req, res) => {
	const newConversation = new conversationModel({
		members: [req.body.senderId, req.body.receiverId],
	});
	try {
		const savedConversation = await newConversation.save();
		res.status(200).json({ savedConversation });
	} catch (err) {
		res
			.status(500)
			.json({ msg: "err occured in creating new conversation", err });
	}
};

// getting a particular conversation or mtlb conversation-Id of a user(by its userId)

const getConversations = async (req, res) => {
	const { userId } = req.params;
	try {
		const conversations = await conversationModel.find({
			members: { $in: [userId] },
		});
		res.status(200).json({ conversations });
	} catch (err) {
		res.status(500).json({ msg: "erro in getting conversationId", err });
	}
};

// getting conversation which is including both users:-
const getConversationBoth = async (req, res) => {
	const { userOneId, userTwoId } = req.params;
	try {
		const conversation = await conversationModel.find({
			members: { $all: [userOneId, userTwoId] }, //here $all-operator mtlb jismeh yeh sb elements ho.
		});
		res.status(200).json({ conversation });
	} catch (err) {
		res.status(500).json({ msg: "err in get conversation of both users", err });
	}
};
module.exports = { createConversation, getConversations, getConversationBoth };
