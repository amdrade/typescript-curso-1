export class Negociacao {
    private _data: Date;

    constructor(data: Date, public readonly quantidade: number, public readonly valor: number) {
        this._data = data;
    }

    get data(): Date {
        return new Date(this._data.getTime());
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const data = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString, 10);
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor);
    }


}