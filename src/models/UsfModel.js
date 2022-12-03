const mongoose = require("mongoose")

const usfSchema = new mongoose.Schema({
    id:{
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    nome:{
        type: String,
        required: true
    },
    cnpj:{
        type: String,
        required: true
    },
    telefone:{
        type: String
        
    },
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    isIniciativaPrivada:{
        type: Boolean,
        
    },
    endereco:{
        cep: String,
        rua: String,
        numero: String,
        complemento: String,
        referencia: String,
        estado: String,
        cidade: String,
        bairro: String,
    },
    horario_de_Atendimento:{
        Segunda_Feira: String,
        Terça_Feira: String,
        Quarta_Feira: String,
        Quinta_Feira: String,
        Sexta_Feira: String,
    },
    medicos_atuantes:[],
    enfermeiros_atuantes:[],
    serviços_Especializados: [],
    pessoas_responsaveis: {
        type: String,
        required: true
    },
    instalações:{
        tipo_Instalação: String,
        descrição: String,
        leitos:String,
        salas: String,
    }
},  { timestamps : true })

    module.exports = mongoose.model("postos", usfSchema)