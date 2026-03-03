// Lista de convidados
const convidados = ["André", "Beatriz", "Aline", "Caio", "Amanda", "Daniel", "Alberto"];

const corpoTabela = document.getElementById('corpo-tabela');
const celulaTotalA = document.getElementById('total-a');

let contadorA = 0;

// Loop para imprimir nomes e contar iniciais com 'A'
for (let nome of convidados) {
    const nomeMaiusculo = nome.toUpperCase();
    
    // Inserindo na Tabela 1
    const linha = document.createElement('tr');
    linha.innerHTML = `<td>${nomeMaiusculo}</td>`;
    corpoTabela.appendChild(linha);

    // Verificando letra A
    if (nomeMaiusculo.startsWith("A")) {
        contadorA++;
    }
}

// Atualizando Tabela 2
celulaTotalA.textContent = contadorA;

