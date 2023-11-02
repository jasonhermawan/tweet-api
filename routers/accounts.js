const { accountsController } = require("../controllers");
const router = require("express").Router();

router.get("/", accountsController.getDataAccount);
router.post("/", accountsController.create);

module.exports = router;
