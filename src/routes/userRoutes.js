const express = require("express")
const router = express.Router()


const controller = require("../controllers/userController")
const authController = require("../controllers/authController")

const {checKAuth} = require("../middlewares/auth")


router.post("/criar", controller.criarUsuario)
router.post("/login", authController.login)  



module.exports = router; 