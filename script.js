const convidados = ["Ana", "Bruno", "Amanda", "Carlos", "Alice", "David", "Arthur"];
const corpoTabela = document.getElementById('tabela-nomes');
const celulaContagem = document.getElementById('contagem-a');

let contadorA = 0;

// Loop para imprimir na tabela e contar
convidados.forEach(nome => {
    const nomeMaiusculo = nome.toUpperCase();
    
    // Adiciona linha na Tabela 1
    const linha = document.createElement('tr');
    linha.innerHTML = `<td>${nomeMaiusculo}</td>`;
    corpoTabela.appendChild(linha);

    // Verifica se começa com 'A'
    if (nomeMaiusculo.startsWith("A")) {
        contadorA++;
    }
});

// Atualiza a Tabela 2 com o resultado
celulaContagem.textContent = contadorA;
