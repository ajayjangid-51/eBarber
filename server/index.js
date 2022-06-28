const express = require("express");
const app = express();
const cors = require("cors");
const os = require("os");
const path = require("path");
const multer = require("multer");
const router = require("./routes");

// connecting to database.
require("./configs/db");

const userCollection = require("./models/client/user");
const Myip = os.networkInterfaces()["Wi-Fi"][3].address;

// wholeapp-middlewares:-
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// serving static-files(like .html , .css and images):-
app.use("/images", express.static(path.join(__dirname, "public")));

// ...  handling all uploadings on server:-
const storageEngine = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/images");
	},
	filename: (req, file, cb) => {
		cb(null, req.body.name);
		// cb(null, "xyx.png");
	},
});
const uploadMiddlewarefns = multer({ storage: storageEngine });

// app's specific routes's middlewares and with thier controllers :-
app.get("/", (req, res) => {
	res.send("welcome to homepage😀..");
});
app.post("/api/upload", uploadMiddlewarefns.single("fili"), (req, res) => {
	try {
		res.status(200).json({ msg: "okay your file uploaded successfully" });
	} catch (err) {
		res.status(500).json({ msg: "err in  uploading file", err });
	}
});
app.use("/api", router);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
	console.log("server started and live on portno:", { PORT, Myip });
});

// IN git -commands:-
// "[]" square-brackets mtlb these are "flags" "optionals"
// "<>" angle-brackets mtlb these are "variables" and apnko uss variable ki value put krni hai.
