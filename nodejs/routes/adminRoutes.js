

const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.send("main page")
})
router.get("/all-admin", (req, res) => {
    res.send("admin all page")
})


module.exports = router;