export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
        console.log(this.elemento);
    }
    template(negociacoes) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
            <tr>
                <th>Data</th>
                <th>Quantidade</th>
                <th>Valor</th>
            </tr>
            </thead>
            <tbody>
            ${negociacoes.lista().map(({ data, quantidade, valor }) => {
            return `
                    <tr>
                        <td>${new Intl.DateTimeFormat().format(data)}</td>
                        <td>${quantidade}</td>
                        <td>${valor}</td>
                    </tr>
                    `;
        }).join('')}
            </tbody>
        </table>
        `;
    }
    update(negociacoes) {
        this.elemento.innerHTML = this.template(negociacoes);
    }
}
