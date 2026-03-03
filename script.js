const convidados = ["Ana", "Bruno", "Amanda", "Carlos", "Alice", "David", "Arthur"];
const corpoTabela = document.getElementById('tabela-nomes');
const campoTotal = document.getElementById('total-a');

let contadorA = 0;

// Loop para imprimir nomes e realizar a contagem
convidados.forEach(nome => {
    const maiusculo = nome.toUpperCase();
    
    // Inserindo na Tabela 1
    const linha = document.createElement('tr');
    linha.innerHTML = `<td>${maiusculo}</td>`;
    corpoTabela.appendChild(linha);

    // Contando iniciais com 'A'
    if (maiusculo.startsWith("A")) {
        contadorA++;
    }
});

// Atualizando Tabela 2
campoTotal.textContent = contadorA;
