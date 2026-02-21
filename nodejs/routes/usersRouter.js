



const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.send("main page")
})

router.get("/all-users", (req, res) => {
    res.send("all users page")
})

module.exports = router;