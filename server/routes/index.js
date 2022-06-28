const express = require("express");
const router = express.Router();
const adminRouter = require("./admin");
const clientRotuer = require("./client");

const fn = (req, res) => {
	console.log("fn is called");
	res.status(200).send("hi how are you");
};

router.use("/admin", adminRouter);
router.use("/client", clientRotuer);
router.get("/hl", fn); // here fn is function-variable so toh function-parameter-passing(mtlb when passing "function" as a parameter) meh apnkok yeh sirf function-variable-ka-naam likhna hota hai.

module.exports = router;
