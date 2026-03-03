const convidados = ["Ana", "Bruno", "Amanda", "Carlos", "Alice", "David"];
let contadorA = 0;

console.log("LISTA DE CONVIDADOS:");

convidados.forEach(nome => {
    // Imprime em letra maiúscula
    console.log(nome.toUpperCase());

    // Conta nomes que começam com 'A'
    if (nome.toUpperCase().startsWith("A")) {
        contadorA++;
    }
});

console.log(`Total de nomes que começam com A: ${contadorA}`);

