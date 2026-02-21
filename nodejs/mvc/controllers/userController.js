


const index = (req, res) => {
    res.render("user/main", {title: "user", name : "user: joshua daliva"})
}
const info = (req, res) => {
    res.render("user/info")
}



module.exports = {
    index, info
}

