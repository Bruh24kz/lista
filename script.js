const convidados = ["André", "Beatriz", "Aline", "Caio", "Amanda", "Daniel", "Alberto"];
const corpoTabela = document.getElementById('corpo-tabela');
const celulaTotalA = document.getElementById('total-a');
const btnFiltro = document.getElementById('btn-filtro');
const statusText = document.getElementById('status-text');

function renderizarLista(lista) {
    corpoTabela.innerHTML = ""; // Limpa a tabela
    let somaA = 0;

    lista.forEach(nome => {
        const nomeMaiusculo = nome.toUpperCase();
        const linha = document.createElement('tr');
        linha.innerHTML = `<td>${nomeMaiusculo}</td>`;
        corpoTabela.appendChild(linha);

        if (nomeMaiusculo.startsWith("A")) somaA++;
    });
    celulaTotalA.textContent = somaA;
}

// Evento de Clique para Filtrar
btnFiltro.addEventListener('click', () => {
    const filtrados = convidados.filter(n => n.toUpperCase().startsWith("A"));
    renderizarLista(filtrados);
    statusText.textContent = "Filtro Ativo: Letra A";
    btnFiltro.textContent = "Ver Todos";
    
    // Alternar funcionalidade (Reset)
    btnFiltro.onclick = () => location.reload(); 
});

// Inicialização
renderizarLista(convidados);
