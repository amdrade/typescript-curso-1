export class Negociacao {
    private _data: Date;

    constructor(data: Date, public readonly quantidade: number, public readonly valor: number) {
        this._data = data;
    }

    get data(): Date {
        return new Date(this._data.getMilliseconds());
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }
}