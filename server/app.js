const express      = require("express")
const path         = require("path")
const favicon      = require("serve-favicon")
const logger       = require("morgan")
const cookieParser = require("cookie-parser")
const bodyParser   = require("body-parser")

const api = require("./routes/api")

const app = express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, "public", "favicon.ico")))
app.use(logger("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

app.get("*.js", (req, res, next) => {
    req.url = `${req.url}.gz`
    res.set("Content-Encoding", "gzip")
    res.set("Content-Type", "text/javascript")
    next()
})

app.use(express.static(path.join(__dirname, "../dist")))

app.use("/api", api)
app.use("*", (req, res, next) => { // eslint-disable-line
    res.sendFile(path.join(__dirname, "../dist/index.html"))
})

app.use((err, req, res, next) => { // eslint-disable-line
    res.locals.message = err.message
    res.locals.error   = req.app.get("env") === "development" ? err : {}

    res.status(err.status || 500)
    res.render("error")
})

module.exports = app
