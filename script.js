let listaOriginal = ["Ana", "Bruno", "Amanda"];

// Função para desenhar as tabelas
function renderizar(lista) {
    const corpo = document.getElementById('tabela-nomes');
    const totalA = document.getElementById('total-a');
    corpo.innerHTML = "";
    let contagem = 0;

    // LOOP: Imprime em maiúsculo e conta
    lista.forEach(nome => {
        const maiusc = nome.toUpperCase();
        corpo.innerHTML += `<tr><td>${maiusc}</td></tr>`;
        if (maiusc.startsWith("A")) contagem++;
    });

    totalA.textContent = contagem;
}

// Função para adicionar novo nome
function adicionarConvidado() {
    const input = document.getElementById('novo-nome');
    const nome = input.value.trim();

    if (nome !== "") {
        listaOriginal.push(nome);
        renderizar(listaOriginal);
        input.value = ""; // Limpa campo
        document.getElementById('log-linha').innerHTML = `<td>Adicionado: ${nome}</td><td>Sucesso</td>`;
    }
}

// Função para filtrar
function filtrarA() {
    const filtrados = listaOriginal.filter(n => n.toUpperCase().startsWith("A"));
    renderizar(filtrados);
    document.getElementById('log-linha').innerHTML = `<td>Filtro aplicado</td><td>Ativo</td>`;
}

// Limpar tudo
function limparTudo() {
    listaOriginal = [];
    renderizar(listaOriginal);
}

// Início
renderizar(listaOriginal);
