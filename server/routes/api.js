const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
    res.end("/api")
})

router.all("*", (req, res) => {
    res.end("Api not found.")
})

module.exports = router
