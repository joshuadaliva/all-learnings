


const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {

    const data = {
        personalInfo : [
            {
                name : "joshua daliva",
                age : 21
            },
            {
                name : "jeannele divilles",
                age : 21
            }
        ]
    }

    res.render("vendors/main", data);
})
router.get("/all-vendors", (req, res) => {
    
    res.send("vendors all page")
})



module.exports = router