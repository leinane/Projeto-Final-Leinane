const UserSchema = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

const login = (req, res) =>{
    try {
        UserSchema.findOne({email: req.body.email}, (error, user) =>{
            if(!user) {
                return res.status(404).send({
                    message: 'Esse usuário não foi encontrado no nosso sistema',
                    email: `${req.body.email}`

                })
            }

            const validSenha = bcrypt.compareSync(req.body.password, user.password)
            console.log("Essa senha é valida?", validSenha)

            if(!validSenha){
                return res.status(401).send({
                    massage:"Senha invalida!!"                    
                })
            }

            const token = jwt.sign({name: user.name}, SECRET);

            res.status(200).send({
                message: "Você está logadah!",
                token
            })
        })
    } catch (err) {
        response.status(500).send({
            message: err.message,
        })
    }
}



module.exports = {
    login 
}