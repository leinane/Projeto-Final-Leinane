//require("dotenv-safe").config()
const express = require("express")
const cors = require('cors')
const app = express()
const postosRouter = require("./routes/UsfRoutes")
const indexRouter = require("./routes/indexRoutes")





const database = require("./database/mongoConfig")




app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(indexRouter) 

app.use("/postos", postosRouter)


database.connect()








module.exports = app
