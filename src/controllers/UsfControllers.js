const postosSchema = require("../models/UsfModel")


const createPostos = async(req, res) =>{
    try {
        const posto = new postosSchema({
            nome: req.body.nome,
            cnpj: req.body.cnpj,
            telefone: req.body.telefone,
            isIniciativaPrivada: req.body.isIniciativaPrivada,
            endereco: req.body.endereco,
            serviços_Especializados:req.body.serviços_Especializados,            
            horario_de_Atendimento: req.body.horario_de_Atendimento,
            medicos_atuantes: req.body.medicos_atuantes,
            enfermeiros_atuantes:req.body.enfermeiros_atuantes,
            pessoas_responsaveis: req.body.pessoas_responsaveis,
            instalações:req.body.instalações

        })        
        
        const salvarPosto = await posto.save()
        res.status(201).json({
            posto: salvarPosto 
        })
    } catch (error) {
        res.status(400).json({
            mensagem: error.message
        })
    }
}


const getAll = async(req, res) =>{
    try {
        const postos = await postosSchema.find()
        res.status(200).send(postos)
        res.status(200).json({
            message:"Postos encontrados"
        })
        
    } catch (error) {
        res.status(500).send({message:"error"})
    }
        
}


const getById = async(req, res) =>{
    try {
        const { id } = req.params
        const encontrarPosto = await postosSchema.findById( id)
        
      if(encontrarPosto == undefined){
        return res.status(404).send({
            message: "Posto não encontrado"
        })
      }

        res.status(200).send(encontrarPosto)
    } catch (error) {
        res.status(500).send({message:"error"})
    }
}

const deletePosto = async(req, res) =>{
    try {
       const postoEncontrado = await postosSchema.findById(req.params.id)
       if(postoEncontrado == undefined){
        return res.status(404).send({mensagem: "Posto não encontrado"})
       }

       await postoEncontrado.delete()
       res.status(200).json({mensagem:"Posto removido com sucesso!"})

    } catch (error) {
        res.status(400).json({message:"error"})
    }
}

const updateGenerico = async(req, res) =>{
    try {
        const {nome, telefone, cnpj, isIniciativaPrivada, 
            endereco, serviços_Especializados, horario_de_Atendimento,
            medicos_atuantes, enfermeiros_atuantes, pessoas_responsaveis,
            instalações          
        } = req.body 

            let postos = await postosSchema.findById(req.params.id)
            postos.nome = nome || postos.nome 
            postos.cnpj = cnpj|| postos.cnpj
            postos.telefone = telefone || postos.telefone
            postos.isIniciativaPrivada = isIniciativaPrivada || postos.isIniciativaPrivada
            postos.endereco = endereco || postos.endereco
            postos.serviços_Especializados = serviços_Especializados || postos.serviços_Especializados                    
            postos.horario_de_Atendimento = horario_de_Atendimento || postos.horario_de_Atendimento
            postos.medicos_atuantes = medicos_atuantes || postos.medicos_atuantes
            postos.enfermeiros_atuantes = enfermeiros_atuantes || postos.enfermeiros_atuantes
            postos.pessoas_responsaveis = pessoas_responsaveis || postos.pessoas_responsaveis
            postos.instalações = instalações || postos.instalações

            const postoAtualizado = postos.save()
            //res.status(200).json(postoAtualizado)
            res.status(200).json({mensagem:"Posto atualizado com sucesso!"})

        
    } catch (error) {
        res.status(400).json({message:"error"})
        
    }
}


module.exports = {
    createPostos,
    getAll,
    getById,
    deletePosto,
    updateGenerico

}