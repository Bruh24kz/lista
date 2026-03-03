const convidados = ["Ana", "Bruno", "Amanda", "Carlos", "Alice", "David"];
const listaUl = document.getElementById('lista-convidados');
const resultadoP = document.getElementById('contador-resultado');

let contadorA = 0;

// Loop para imprimir cada nome e contar os que começam com 'A'
convidados.forEach(nome => {
    // Transformar para maiúsculas
    const nomeMaiusculo = nome.toUpperCase();
    
    // Criar o item da lista (li)
    const li = document.createElement('li');
    li.textContent = nomeMaiusculo;
    listaUl.appendChild(li);

    // Contar nomes que começam com 'A'
    if (nomeMaiusculo.startsWith("A")) {
        contadorA++;
    }
});

// Exibir o total na tela
resultadoP.textContent = `Total de convidados que começam com 'A': ${contadorA}`;

