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

app.listen(9000, () => {
	console.log("okay live on portno:9000");
});
