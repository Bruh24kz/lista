const convidadosIniciais = ["Ana", "Bruno", "Amanda", "Carlos", "Alice", "David", "Arthur"];
let convidadosAtuais = [...convidadosIniciais];

// Função Principal de Processamento
function processarLista(lista = convidadosAtuais) {
    const tbodyNomes = document.getElementById('tabela-nomes');
    const campoContagem = document.getElementById('contagem-a');
    
    tbodyNomes.innerHTML = ""; // Limpa a tabela
    let contadorA = 0;

    // Loop para imprimir nomes em MAIÚSCULA
    lista.forEach(nome => {
        const nomeMaiusculo = nome.toUpperCase();
        const linha = `<tr><td>${nomeMaiusculo}</td></tr>`;
        tbodyNomes.innerHTML += linha;

        if (nomeMaiusculo.startsWith("A")) contadorA++;
    });

    campoContagem.textContent = contadorA;
    registrarLog(lista.length === convidadosIniciais.length ? "Lista Completa" : "Filtro Aplicado");
}

// Função de Filtro
function filtrarA() {
    const filtrados = convidadosIniciais.filter(n => n.toUpperCase().startsWith("A"));
    processarLista(filtrados);
}

// Tabela 3: Gerador de Logs
function registrarLog(acao) {
    const logBody = document.getElementById('tabela-logs');
    const agora = new Date().toLocaleTimeString();
    logBody.innerHTML = `<tr><td>${acao}</td><td>${agora}</td></tr>`;
}

// Reset
function resetar() {
    processarLista(convidadosIniciais);
}

// Inicia ao carregar
window.onload = () => processarLista(convidadosIniciais);
