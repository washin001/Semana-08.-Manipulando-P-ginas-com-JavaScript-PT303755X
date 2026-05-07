class Estudante {
    constructor(nomePrimeiro, nomeSegundo, notaPrimeira, notaSegunda) {
        this.nomePrimeiro = nomePrimeiro;
        this.nomeSegundo = nomeSegundo;
        this.notaPrimeira = notaPrimeira;
        this.notaSegunda = notaSegunda;
    }
    
    nomeInteiro() {
        return this.nomePrimeiro + " " + this.nomeSegundo;
    }
    
    calcularMedia() {
        return (this.notaPrimeira * 0.6) + (this.notaSegunda * 0.4);
    }
    
    verificarStatus() {
        return this.calcularMedia() > 6 ? "Aprovado" : "Reprovado";
    }
}

const listaEstudantes = [
    new Estudante("Fernando", "Rodrigues", 7.0, 8.5),
    new Estudante("Camila", "Nascimento", 5.0, 7.0),
    new Estudante("Thiago", "Oliveira", 9.0, 6.5),
    new Estudante("Juliana", "Ferreira", 4.0, 5.5),
    new Estudante("Marcelo", "Gomes", 8.0, 7.5)
];

function exibirEstudantes() {
    let htmlMontado = '';
    htmlMontado += '<table border="1">';
    htmlMontado += '<tr><th>Nome Completo</th><th>Média</th><th>Situação</th></tr>';
    
    for (let i = 0; i < listaEstudantes.length; i++) {
        let item = listaEstudantes[i];
        let valorMedia = item.calcularMedia().toFixed(2);
        let statusAtual = item.verificarStatus();
        let classeStatus = statusAtual === "Aprovado" ? "aprovado" : "reprovado";
        
        htmlMontado += '<tr>';
        htmlMontado += '<td>' + item.nomeInteiro() + '</td>';
        htmlMontado += '<td>' + valorMedia + '</td>';
        htmlMontado += '<td class="' + classeStatus + '">' + statusAtual + '</td>';
        htmlMontado += '</tr>';
    }
    
    htmlMontado += '</table>';
    
    document.getElementById('saida').innerHTML = htmlMontado;
    
    alert("Dados de 5 estudantes carregados!");
    alert("Exemplo - " + listaEstudantes[0].nomeInteiro() + " - Média: " + listaEstudantes[0].calcularMedia().toFixed(2) + " - " + listaEstudantes[0].verificarStatus());
    alert("Exemplo - " + listaEstudantes[1].nomeInteiro() + " - Média: " + listaEstudantes[1].calcularMedia().toFixed(2) + " - " + listaEstudantes[1].verificarStatus());
    alert("Exemplo - " + listaEstudantes[2].nomeInteiro() + " - Média: " + listaEstudantes[2].calcularMedia().toFixed(2) + " - " + listaEstudantes[2].verificarStatus());
}

window.onload = exibirEstudantes;
