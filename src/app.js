//require("dotenv-safe").config()
const express = require("express")
const cors = require('cors')
const app = express()
const useroutes = require('./routes/userRoutes')
const postosRouter = require("./routes/UsfRoutes")
const indexRouter = require("./routes/indexRoutes")







const database = require("./database/mongoConfig")




app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(indexRouter) 

app.use("/postos", postosRouter)
app.use("/user", useroutes) 


database.connect()








module.exports = app
