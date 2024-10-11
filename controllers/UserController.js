const UserModel = require('../models/UserModel');

class UserController {

    async listarUsuarios(request, response) {
        try {
            const dados = await UserModel.findAll();
            return response.json(dados);
        } catch(e) {
            return response.status(500).json({ error: 'Ocorreu um erro ao listar usuários.' });
        }
        
    }

    async consultarPorId(request, response) {
        try {
            const id = request.params.id;
            const dados = await UserModel.findByPk(id);
        } catch(e) {
            return response.status(500).json({ error: 'Ocorreu um erro ao listar usuários.' });
        }
    }

    async criarUsuario(request, response) {
        try {
            const dados = request.body;
            const resultado = await UserModel.create(dados);
            return response.json({ message: 'Usuario criado com sucesso.' });
        } catch(e) {
            return response.status(500).json({ error: 'Ocorreu um erro ao criar usuário.' });
        }
    }

    async atualizarUsuario(request, response) {
        try {
            const id = request.params.id;
            const dados = request.body;
            const resultado = await UserModel.update(dados, { 
                where: { id: id }
             });
            return response.json({ message: 'Usuario atualizado com sucesso.' });
        } catch(e) {
            return response.status(500).json({ error: 'Ocorreu um erro ao atualziar usuário.' });
        }
    }

    async deletarUsuario(request, response) {
        try {
            const id = request.params.id;
            const resultado = await UserModel.destroy({ where: { id: id } });
            return response.json({ message: 'Usuario deletado com sucesso.' });
        } catch(e) {
            return response.status(500).json({ error: 'Ocorreu um erro ao deletar usuário.' });
        }
    }

}

module.exports = new UserController();