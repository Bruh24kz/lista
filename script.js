let convidados = ["Ana", "Bruno", "Amanda", "Carlos", "Alice", "David", "Arthur"];

const corpoTabela = document.getElementById('tabela-nomes');
const campoTotal = document.getElementById('total-a');
const logAcao = document.getElementById('log-acao');
const logStatus = document.getElementById('log-status');

function atualizarTabelas(lista) {
    corpoTabela.innerHTML = "";
    let contadorA = 0;

    lista.forEach(nome => {
        const maiusculo = nome.toUpperCase();
        const linha = document.createElement('tr');
        linha.innerHTML = `<td>${maiusculo}</td>`;
        corpoTabela.appendChild(linha);

        if (maiusculo.startsWith("A")) contadorA++;
    });

    campoTotal.textContent = contadorA;
}

// Botão Ordenar
document.getElementById('btn-ordenar').addEventListener('click', () => {
    convidados.sort(); // Ordena o array original
    atualizarTabelas(convidados);
    logAcao.textContent = "Ordenação";
    logStatus.textContent = "Concluído";
});

// Botão Filtrar
document.getElementById('btn-filtrar').addEventListener('click', () => {
    const filtrados = convidados.filter(n => n.toUpperCase().startsWith("A"));
    atualizarTabelas(filtrados);
    logAcao.textContent = "Filtro Letra A";
    logStatus.textContent = "Ativo";
});

// Inicialização
atualizarTabelas(convidados);
