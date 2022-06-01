const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes");

// app-middleware:-
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app-routing-middleware:-
app.use("/", router);
app.get("/", (req, res) => {
	res.send("helo ji");
});
// app.post("/signin", (req, res) => {
// 	console.log("some signin request we got...");
// 	console.log(req.body);
// 	res.status(200).send({ key1: "hi", key2: "hello" });
// });

app.listen(9000, () => {
	console.log("okay live on portno:9000");
});
