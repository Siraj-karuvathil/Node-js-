const router = require("express").Router();
const { ensureRequestSanity } = require("../middlewares/request");
const health = require("./health");
const auth = require("./auth");

// middleware
router.use(ensureRequestSanity());

// routes
router.use("/health", health);
router.use("/auth", auth);

module.exports = router;
