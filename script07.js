let metaLivros = 4;
let livrosLidos = ["O Príncipe Cruel", "Pequeno Príncipe", "A Culpa é das Estrelas", "Harry Potter e a Pedra Filosofal"];

for (let i = 0; i < livrosLidos.length; i ++) {
    console.log(livrosLidos[i])
    if (livrosLidos.length >= metaLivros) {
        console.log("Parabéns! Você atingiu sua meta de leitura!")
    } else {
        console.log(`Você está progredindo! Faltam ${metaLivros-livrosLidos} livros para atingir sua meta.`)
    }
}
