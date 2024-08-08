# Exercícios de Revisão JavaScript

## Atividade 01

Um parque de diversões decidiu intalar uma mini montanha-russa! Para garantir a segurança dos clientes. Você precisa criar um programa que verifica se a pessoa pode ou não entrar no brinquedo, de acordo com o acordo a altuta mínima permitida. Implemente também o limite para altura máxima.

## Atividade 02

O parque está com uma promoção relâmpago! A cada três ingressos comprados, o cliente ganha uma porção de batatas fritas grátis. Você precisa criar um programa que calcule quantas porções de batata frita o cliente ganhará, baseado na quantidade de ingressos que ele comprar.

## Atividade 03

Talentos Musicais
Contexto: 
Uma escola de música está realizando audições para novos alunos! Para organizar as inscrições, você  precisa criar um programa que verifica se a pessoa possui a idade mínima para realizar sua matrícula.

Tarefa:
Criar a variável de idade mínima: Crie uma variável chamada idadeMinima e atribua a ela o valor 7 (anos), que representa a idade mínima para entrar na escola.
Criar a variável de idade do aluno: Crie uma variável chamada idadeAluno e atribua a ela o valor da idade do aluno.

Verificar a idade:
 Utilize a estrutura de decisão if para verificar se a idadeAluno é maior ou igual à idadeMinima.

Exibir mensagem:
Se a idadeAluno for maior ou igual à idadeMinima, exiba no console a mensagem: "Matrícula realizada com sucesso!".
Caso contrário, exiba a mensagem: "Desculpe, você ainda não pode se matricular nesta escola!".

Desafio Extra:
Implemente intervalos de idades para definir categorias de turmas.

## Atividade 04

Aplaudindo a Banda
Uma banda de música está se apresentando e a plateia esta super animada! Você precisa criar um programa que simule os aplausos da plateia, exibindo no console uma sequência de palmas "👏🏻" de acordo com a intensidade escolhida pelo usuário.

Tarefa:
Definir a intensidade. Crie uma variável chamada quantidadePalmas e atribua a ela o valor de palmas dadas pela plateia.
Gerar aplausos: Utilize um laço de repetição for para exibir no console a sequência de palmas "👏🏻" correspondente à intensidade escolhida.
Exemplo: Se quantidadePalmas for igual a 3, o programa deve exibir "👏🏻👏🏻👏🏻".

Desafio Extra: 
Implemente uma lógica para que, a cada 5 palmas, o programa adicione um emoji de "🎉" à string de aplausos.

## Atividade 05

Contexto: Uma lanchonete modernizou o seu sistema de pedidos! Agora, os clientes montam seus hambúrgueres diretamente no código, sem precisar de interface gráfica. É a sua vez de programar essa experiência inovadora!

Tarefa:
Definir os Arrays de Ingredientes: Aqui estão os arrays com os ingredientes da hamburgueria:

let paes = ["Pão Australiano", "Pão Brioche", "Pão de Gergelim"];
let molhos = ["Maionese", "Ketchup", "Mostarda", "Barbecue"];
let saladas = ["Alface", "Tomate", "Cebola", "Picles"];
let carnes = ["Carne Bovina", "Frango Grelhado", "Veggie Burger"];
let queijos = ["Cheddar", "Mussarela", "Prato", "Gorgonzola"];

Criar o Hambúrguer:Crie um novo array chamado hamburger que irá armazenar os ingredientes do hambúrguer montado.
Selecionar os Ingredientes: Utilize os índices dos arrays para adicionar os seguintes ingredientes ao hambúrguer:

- Pão: paes[1] (Pão Brioche)
- Molho: molhos[0] (Maionese)
- Salada: saladas[2] (Cebola)
- Carne: carnes[0] (Carne Bovina)
- Queijo: queijos[2] (Prato)

Exibir o Hambúrguer: Utilize console.log() para exibir os ingredientes do hamburger no terminal, um em cada linha.