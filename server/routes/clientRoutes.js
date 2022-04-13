const router = require("express").Router();
const controllersClientSignMethods = require("../controllers/client/signMethods");

router.post("/signIn", controllersClientSignMethods.signIn);
router.post("/signUp", controllersClientSignMethods.signUp);
module.exports = router;
