// Se a altura da pessoa for maior ou igual a altura mínima e menor que a altura máxima: permitido, senão: não permitido

let alturaPessoa = 1.61
let alturaMinima = 1.40
let alturaMaxima = 2.01

if (alturaPessoa >= alturaMinima && alturaPessoa < alturaMaxima) {
    console.log("Permitido!");
} else {
    console.log("Não Permitido!");
}

