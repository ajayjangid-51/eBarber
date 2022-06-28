const socketio = require("socket.io");
const app = socketio(8900, {
	cors: {
		origin: "*",
	},
});

let onlineUsers = [];

const addUser = (userId, socketId) => {
	if (!onlineUsers.some((e) => e.userId === userId))
		onlineUsers.push({ userId, socketId });
	// in ES6 or ES7 other way of writing simple one if-conditional-statement there i a one shorthand(i.e(this is) ki "if()" ko hata dena hai and "{}" ki jagah "opening curly-brace" pe "&&(andersand)" lagadena hai. like this:- !onlineUser.some(e=>e.userId==userId) && onlineUser.push({userId, socketId})).
};
const removeUser = (socketId) => {
	onlineUsers = onlineUsers.filter((e) => e.socketId !== socketId);
};
const getUser = (userId) => {
	return onlineUsers.find((e) => e.userId === userId);
};

socketio.on("connnection", (allotedSocket) => {
	console.log(
		"some uset got connected on socket-server and   its allotedSocket is",
		{ allotedSocket }
	);

	// now after connection is made we will "listen" and "emit" default and custom(our created) events on/from our server :-
	allotedSocket.on("addUser", (obj) => {
		addUser(obj.userId, allotedSocket.id);
		socketio.emit("getOnlineUsers", { onlineUsers });
	});
	// allotedSocket.on(xyz_event) means ki ess allotedSocket pe yeh xyz-event hota hai toh.
	allotedSocket.on("sendMessage", (obj) => {
		const receiverUser = getUser(obj.receiverId);

		// to() mtlb ess allotedSocket pe specified "emit" krna hai.
		socketio.to(receiverUser.socketId).emit("getMessage", {
			// obj.senderId , obj.message,
			...obj,
		});
	});

	allotedSocket.on("disconnect", () => {
		console.log("some user got disconnected");
		removeUser(allotedSocket.id);
		socketio.emit("getOnlineUsers", { onlineUsers });
	});
});
