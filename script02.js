// A cada três ingressos, o cliente ganha uma batata

let quantidadeIngressos = 9;
let batataPromocao = 0;
let nome = "Bruna";

for (let i = 1; i <= quantidadeIngressos; i++) {
    if (i % 3 === 0){
        batataPromocao++
    }
}

console.log(
    "Olá " + nome + "! você ganhou " + batataPromocao + " de porções de batatas fritas!",
); 


//ChatGPT
//let batataFrita = 0;
//let quantidadeIngressos = 9;

// Usamos um loop for para contar quantas porções de batatas fritas são ganhas
//for (let i = 3; i <= quantidadeIngressos; i += 3) {
//    batataFrita++;
//}

//console.log("O cliente ganhará " + batataFrita + " porções de batata frita.");
