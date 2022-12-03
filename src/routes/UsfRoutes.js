const express = require("express")

const router = express.Router()

const controller = require("../controllers/UsfControllers")




router.get("/buscar/:id", controller.getById)
router.post("/create", controller.createPostos)
router.get("/buscar", controller.getAll)
router.delete("/deletar/:id", controller.deletePosto)
router.put("/atualizar/:id", controller.updateGenerico)




module.exports = router
