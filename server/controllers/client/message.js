// message CRUD-opreations:-
const messageModel = require("../../models/client/message");
// create or mtlb add message:-
const addMessage = async (req, res) => {
	const newMessage = new messageModel({
		...req.body,
	});
	try {
		const savedMessage = await newMessage.save();
		res.status(200).json({ savedMessage });
	} catch (err) {
		res.status(500).json({ msg: "err occuredin addingMessage ", err });
	}
};

// 2. get a Messages of a pair(pair of two persons like: get messages of ajay-and-ayan and for this we are using the idea of defining "conversationId").
const getAllMessagesofPair = async (req, res) => {
	const { conversationId } = req.params;
	const messages = await messageModel.find({ conversationId: conversationId });
	try {
		res.status(200).json({ messages });
	} catch (err) {
		res.status(500).json({ msg: "err in getting pair's messages", err });
	}
};

module.exports = { getAllMessagesofPair, addMessage };
