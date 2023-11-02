const { tweetsController } = require("../controllers");
const router = require("express").Router();

router.post("/", tweetsController.postTweet);
router.get("/", tweetsController.getTweet);
router.patch("/:id", tweetsController.updateTweet);
router.delete("/:id", tweetsController.deleteTweet);

module.exports = router;