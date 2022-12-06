const jwt = require('jsonwebtoken')

const SECRET = process.env.SECRET

exports.checKAuth = (req, res, next) =>{
    const authHeader = req.get('authorization');
if(!authHeader) {
    return res.status(401).send({
        message: "Você não tem autorização para acessar"

    })
}

const token = authHeader.split(' ')[1];
console.log("token", token)

if(!token){
    return res.status(401).send({
        message: "error no token "
    })
}

try {
    jwt.verify(token, SECRET, (error) =>{
        if(error){
            return res.status(401).send({
                message: "Não autorizado"
            })
        }
        next();
    })
} catch (error) {
    console.error(error)
}

}