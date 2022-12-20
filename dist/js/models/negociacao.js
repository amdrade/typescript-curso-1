export class Negociacao {
    constructor(data, quantidade, valor) {
        this.quantidade = quantidade;
        this.valor = valor;
        this._data = data;
    }
    get data() {
        return new Date(this._data.getMilliseconds());
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
