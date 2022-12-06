const express = require("express")

const router = express.Router()

const controller = require("../controllers/UsfControllers")

const {checKAuth} = require("../middlewares/auth")


router.get("/buscar/:id", controller.getById)
router.post("/create",checKAuth,controller.createPostos)
router.get("/buscar", controller.getAll)
router.delete("/deletar/:id",checKAuth,controller.deletePosto)
router.put("/atualizar/:id",checKAuth,controller.updateGenerico)




module.exports = router
