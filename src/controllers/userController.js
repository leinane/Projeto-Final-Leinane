const UserSchema = require('../models/userSchema')
const bcrypt = require("bcrypt")


const criarUsuario = async(req, res) =>{
    
    const hashedPassword = bcrypt.hashSync(req.body.password, 10)
    req.body.password = hashedPassword

    const emailExiste = await UserSchema.exists({email: req.body.email})

    if(emailExiste){
        return res.status(409).send({
            message: "O email já foi cadastrado",
        })
    }   
    
    
    try {
      const novoUsuario = new UserSchema(req.body)
      const salvarUsuario = await novoUsuario.save()
      res.status(201).send({
        message: 'Seu cadastro foi criado com sucesso',
        salvarUsuario
      })  
        
    } catch (error) {
        console.error(error)
        res.status(500).send({
            message: error.message
        })
        
    }
}


module.exports = {
    criarUsuario
}