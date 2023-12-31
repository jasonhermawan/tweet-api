
const router = require("express").Router()
const {accountsControllers} = require("../controllers")

router.post("/", accountsControllers.create)
router.get("/" , accountsControllers.getData) 
router.patch("/:id" , accountsControllers.update) 


module.exports = router;
