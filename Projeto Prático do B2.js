function gerarNumerosAleatoriosOtimizado(quantidade, min = 1, max = 60) {
    if (quantidade > max - min + 1) {
        throw new Error('A quantidade solicitada é maior que o intervalo possível.');
    }

    const numerosDisponiveis = Array.from({length: max - min + 1},(_, i) => i + min);
    const numerosGerados = [];

    for (let i = 0; i < quantidade; i++) {
        const indiceAleatorio = Math.floor(Math.random() * numerosDisponiveis.length);
        numerosGerados.push(numerosDisponiveis.splice(indeceAleatorio, 1)[0]);
    }

    return numerosGerados;
}

function medirTempo(funcao, ...args) {
    const inicio = performance.now();
    const resultado = funcao(...args);
    const fim = performance.now();
    return { resultado, tempo: fim - inicio };
}

const quantidadeNumeros = 50;
const repeticoes = 1000;

let tempoTotal1 = 0;
let tempoTotal2 = 0;

for (let i = 0; i < repeticoes; i++) {
    const { tempo: tempoOriginal } = medirTempo(gerarNumerosAleatorios, quantidadeNumeros);
    const { tempo: tempoOtimizado } = medirTempo(gerarNumerosAleatoriosOtimizado, quantidadeNumeros);

    tempoTotal1 += tempoOriginal;
    tempoTotal2 += tempoOtimizado;
}