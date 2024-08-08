let idadeAluno = 8;
let idadeMinima = 7;

if (idadeAluno >= idadeMinima) {
    console.log("Matrícula realizada com sucesso!");
} else {
    console.log("Desculpe, você ainda não pode se matricular nesta escola!");
}

if (idadeAluno >= 7 && idadeAluno <= 11) {
    console.log("Você pode entrar no Turma 1!")
} else if ( idadeAluno >= 11 && idadeAluno <= 14){
    console.log("Você pode entrar no Turma 2!")
} else if ( idadeAluno >= 14 && idadeAluno <= 20) {
    console.log("Você pode entrar na Turma 3!")
} else if ( idadeAluno >= 20 && idadeAluno <= 35) {
    console.log("Você pode entrar na Turma 4!")
} else if ( idadeAluno >= 35) {
    console.log("Você pode entrar na Turma 5!")
} else (
    console.log("Você não pode entrar nesta escola :(")
)
