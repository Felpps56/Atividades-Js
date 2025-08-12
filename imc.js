// Atividade 1: Calculadora de IMC

let peso = 70; 
let altura = 1.75; 

// Fórmula do IMC: peso / (altura * altura)
let imc = peso / (altura * altura);

let classificacao;
if (imc < 18.5) {
    classificacao = "Abaixo do peso";

} else if (imc < 24.9) {    
    classificacao = "Peso normal";

} else if (imc < 29.9) {    
    classificacao = "Sobrepeso";

} else {    
    classificacao = "Obesidade";
}
console.log("Seu IMC é: " + imc.toFixed(2) + " - " + classificacao);

// ===== Atividade 2: Verificador de Classificação Etária =====
let idades = [15, 20, 17, 22, 19];

for (let idade of idades) {
    if (idade >= 18) {
        console.log("Idade " + idade + " - Maior de idade.");
    } else {
        console.log("Idade " + idade + " - Menor de idade.");
    }
}