export function LogarTempoDeExecucao() {
    return function (target, propertKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertKey}, tempo de execução ${(t2 - t1) / 1000} segundos`);
            retorno;
        };
        return descriptor;
    };
}
