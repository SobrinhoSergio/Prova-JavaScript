import { ServicoError } from "/error/ServicoError.js";

const API_GAMES = 'http://localhost:3000/games';

export class Servico {
    async comId(id) {
        const resp = await fetch(`${API_GAMES}/${id}`);

        if (resp.ok) {
            return resp.json();
        } else {
            throw new ServicoError('Não foi possível carregar o game. Status: ' + resp.status);
        }
    }

    async alterar(game) {
        const resp = await fetch(`${API_GAMES}/${game.id}`, {
            method: 'PUT',
            body: JSON.stringify(game),
            headers: {
                'content-type': 'application/json'
            }
        });

        if (resp.ok) {
            return resp.json();
        } else {
            throw new ServicoError('Não foi possível alterar o game. Status: ' + resp.status);
        }
    }

    async remover(id) {
        const resp = await fetch(`${API_GAMES}/${id}`, {
            method: 'DELETE'
        });

        if (resp.ok) {
            return resp.json();
        } else {
            throw new Error('Erro ao remover o jogo: ' + resp.status);
        }       

    }
}