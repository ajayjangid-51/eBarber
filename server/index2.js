const ajay = require("ajay");
const express = require("express");
const app = express();
const os = require("os");
const cors = require("cors");
const router = require("./routes");

// const ajay = require("ajay");
// const apk = ajay();
// console.log(apk.name);
// connecting to database.
require("./configs/db");

const Myip = os.networkInterfaces()["Wi-Fi"][3].address;
// wholeapp-middlewares:-
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app's specific routes's middlewares and with thier controllers :-
app.get("/", (req, res) => {
	res.send("welcome to homepage..");
});
app.use("/api", router);
//

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
	console.log("server started and live on portno:", { PORT, Myip });
});

/* 
// 62b863f08d07aa601f71b715
// 6294219120c9e8fe11705f38

const fn = async () => {
	const targetUser = await userCollection.findById("62b863f08d07aa601f71b715");
	const client = await userCollection.findById("6294219120c9e8fe11705f38");
	console.log("clientId is", client._id);
	console.log("targetUserId is", targetUser._id);

	await targetUser.updateOne({ $pull: { followers: client._id } });
};
fn();
// const Myip = os.networkInterfaces()["Wi-Fi"][3].address; */
