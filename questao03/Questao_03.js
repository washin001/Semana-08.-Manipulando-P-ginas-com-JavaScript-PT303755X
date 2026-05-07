const estudantes = [
    { nomeCompleto: "João da Silva", notaA: 7, notaB: 8.5 },
    { nomeCompleto: "Maria Oliveira", notaA: 5, notaB: 7.0 },
    { nomeCompleto: "Pedro Santos", notaA: 9, notaB: 6.5 }
];

function processarEstudante(estudante) {
    let nome = estudante.nomeCompleto;
    let valor1 = estudante.notaA;
    let valor2 = estudante.notaB;
    let resultado1 = valor1 * 0.6;
    let resultado2 = valor2 * 0.4;
    let somaFinal = resultado1 + resultado2;
    
    alert(`Estudante: ${nome}\nPrimeira avaliação: ${valor1}\nSegunda avaliação: ${valor2}`);
    
    alert(`Estudante: ${nome}\nTotal da avaliação: ${somaFinal.toFixed(2)}`);
}

for (let i = 0; i < estudantes.length; i++) {
    processarEstudante(estudantes[i]);
}
