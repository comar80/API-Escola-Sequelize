// const database = require('../models')
const {NiveisServices} = require('../services')
const niveisServices = new NiveisServices

class NivelController {

    static async pegaTodosOsNiveis(req, res) {
        try {
            const todosOsNiveis = await niveisServices.pegaTodosOsRegistros();
            return res.status(200).json(todosOsNiveis);
        } catch(error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmNivel(req, res) {
        const { id } = req.params;
        try {
            const nivel = await niveisServices.pegaUmRegistro({ id });
            return res.status(200).json(nivel);
        } catch(error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaNivel(req, res) {
        const novoNivel = req.body;

        try {
            const nivel = await niveisServices.criaRegistro(novoNivel);

            return res.status(200).json(nivel);
        } catch(error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaNivel(req, res) {
        const { id } = req.params;
        const novasInfos = req.body;
        try {
            await niveisServices.atualizaRegistro(novasInfos, id);

            return res.status(200).json({message: `Nivel id ${id} atualizado`});

        } catch(error) {
            return res.status(500).json(error.message);
        }
    }

    static async removeNivel(req, res) {
        const { id } = req.params;
        try {
            const nivel = await niveisServices.apagaRegistro(id);
            return res.status(200).json({message: `Nivel com o id ${id} removida`});
        } catch(error) {
            return res.status(500).json(error.message);
        }
    }

    static async restauraNivel(req, res) {
        const {id} = req.params
        try {
          await niveisServices.restauraRegistro(id)
          return res.status(200).json({mensagem: `id ${id} restaurado`})
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }


}

module.exports = NivelController;