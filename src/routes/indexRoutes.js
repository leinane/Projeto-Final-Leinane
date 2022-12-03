const router = require('express').Router()

router.get('/',(req, res)=>{
    res.send({
        'Versao': '1.o',
        'titulo': 'USF-Saj',
        'descricao': 'Mapeamento dos Postos de saúde da cidade de Santo Antônio de Jesus,Bahia.'
    })
})


module.exports = router
