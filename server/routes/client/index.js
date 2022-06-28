const router = require("express").Router();

const auth = require("./auth");
const user = require("./user");
const post = require("./posts");
const message = require("./messages");
const conversataion = require("./conversations");
router.use("/auth", auth);
router.use("/user", user);
router.use("/post", post);
router.use("/message", message);
router.use("/conversation", conversataion);
module.exports = router;
