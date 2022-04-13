const express = require("express");
const router = express.Router();
const adminRouter = require("./adminRoutes");
const clientRotuer = require("./clientRoutes");

const fn = (req, res) => {
	console.log("fn is called");
	res.status(200).send("hi how are you");
};

router.use("/admin", adminRouter);
router.use("/client", clientRotuer);
router.get("/hl", fn); // here fn is function-variable so toh function-parameter-passing meh apnkok yeh sirf variable-ka-naam likhna hota hai.
const fn2 = (req, res) => {
	console.log("fn2 is called");
	console.log(req.body);
	res.status(300).send("we got signin");
};
router.post("/signin", fn2);

module.exports = router;
