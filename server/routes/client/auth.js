const router = require("express").Router();
const { signIn } = require("../../controllers/client/signIn");
const { signUp } = require("../../controllers/client/signUp");

router.post("/signIn", signIn);
router.post("/signUp", signUp);
module.exports = router;
