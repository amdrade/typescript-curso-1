export function escapar(
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
        let retorno = metodoOriginal.apply(this, args);
        if (typeof retorno === 'string') {
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
            console.log(`@escapar em ação na classe ${this.constructor.name} para o método ${propertKey}`)
        }
        return retorno;
    }
    return descriptor;
}