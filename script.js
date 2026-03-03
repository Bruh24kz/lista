let convidados = ["Ana", "Bruno", "Amanda", "Carlos"];

// Função para atualizar as tabelas
function atualizar(lista, acao = "Atualização") {
    const corpo = document.getElementById("corpoNomes");
    const totalA = document.getElementById("totalA");
    corpo.innerHTML = "";
    let contador = 0;

    // LOOP: Transforma em maiúscula e preenche a Tabela 1
    lista.forEach(nome => {
        const maiusculo = nome.toUpperCase();
        corpo.innerHTML += `<tr><td>${maiusculo}</td></tr>`;
        // CONTAGEM: Verifica se começa com A
        if (maiusculo.startsWith("A")) contador++;
    });

    // Atualiza Tabela 2 e 3
    totalA.textContent = contador;
    document.getElementById("logAcao").textContent = acao;
    document.getElementById("logStatus").textContent = "Sucesso";
}

// Botão ADICIONAR
document.getElementById("btnAdd").onclick = () => {
    const nome = document.getElementById("inputNome").value.trim();
    if (nome) {
        convidados.push(nome);
        document.getElementById("inputNome").value = "";
        atualizar(convidados, "Nome Adicionado");
    }
};

// Botão FILTRAR
document.getElementById("btnFiltrar").onclick = () => {
    const filtrados = convidados.filter(n => n.toUpperCase().startsWith("A"));
    atualizar(filtrados, "Filtro Letra A");
};

// Botão VER TODOS
document.getElementById("btnVerTodos").onclick = () => {
    atualizar(convidados, "Lista Completa");
};

// Iniciar sistema
atualizar(convidados, "Sistema Iniciado");
