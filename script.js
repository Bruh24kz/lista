let convidados = ["ANA", "BRUNO", "ALICE"];

const corpo = document.getElementById("corpoNomes");
const totalA = document.getElementById("totalA");

function atualizar(lista, acao = "Lista Atualizada") {
    corpo.innerHTML = "";
    let contador = 0;

    // Loop para preencher a Tabela 1
    lista.forEach((nome, index) => {
        const maiusculo = nome.toUpperCase();
        
        // Criar linha com botão de excluir
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${maiusculo}</td>
            <td><button class="btn-del" onclick="remover(${index})">X</button></td>
        `;
        corpo.appendChild(tr);

        if (maiusculo.startsWith("A")) contador++;
    });

    // Atualiza as outras tabelas
    totalA.textContent = contador;
    document.getElementById("logAcao").textContent = acao;
    document.getElementById("logStatus").textContent = "OK";
}

// Função para ADICIONAR
document.getElementById("btnAdd").onclick = () => {
    const input = document.getElementById("inputNome");
    if (input.value.trim()) {
        convidados.push(input.value.trim());
        input.value = "";
        atualizar(convidados, "Nome Adicionado");
    }
};

// Função para REMOVER
function remover(index) {
    convidados.splice(index, 1);
    atualizar(convidados, "Nome Removido");
}

// Filtro Letra A
document.getElementById("btnFiltrar").onclick = () => {
    const filtrados = convidados.filter(n => n.toUpperCase().startsWith("A"));
    atualizar(filtrados, "Filtro Ativo");
};

// Ver Todos
document.getElementById("btnVerTodos").onclick = () => {
    atualizar(convidados, "Ver Todos");
};

// Inicializar
atualizar(convidados);
