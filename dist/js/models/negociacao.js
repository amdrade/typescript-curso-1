export class Negociacao {
    constructor(data, quantidade, valor) {
        this.quantidade = quantidade;
        this.valor = valor;
        this._data = data;
    }
    get data() {
        return new Date(this._data.getTime());
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const data = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString, 10);
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor);
    }
}
