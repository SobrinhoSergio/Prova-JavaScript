import { GameError } from "/error/GameError";

export class Game {
    _id;
    _nome;
    _ano;
    _fabricante;

    constructor(id, nome, ano, fabricante) {
        this._id = id;
        this._nome = nome;
        this._ano = ano;
        this._fabricante = fabricante;
    }

    setNome(nome) {
        if (nome.length > 1 && nome.length < 81)
            this._nome = nome;
        else
            throw new GameError('O nome deve ter entre 2 e 80 caracteres');
    }

    setAno(ano) {
        if (ano > 1969 && ano < 2023)
            this._ano = +ano;
        else
            throw new GameError('O ano deve estar entre 1970 e 2022');
    }

    setFabricante(fabricante) {
        if (fabricante.length > 1 && fabricante.length < 61)
            this._fabricante = fabricante
        else
            throw new GameError('O fabricante deve ter entre 2 e 60 caracteres');
    }
}