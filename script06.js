let armas = ["Metralhadora", "Laser", "Missil", "Canhão", "Lança chamas"];
let ataques = [];

ataques.push("Bob");
ataques.push(armas[2]);
ataques.push(armas[3]);
ataques.push(armas[4]);

for (let i = 0; i < ataques.length; i++) {
    if (i == 0) {
        console.log(`Nome do Robô: ${ataques[i]}`);
    } else {
        console.log(`Ataque ${i}: ${ataques[i]}`);
    }
}
