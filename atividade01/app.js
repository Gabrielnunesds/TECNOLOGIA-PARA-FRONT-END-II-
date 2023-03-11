var quantidadeMulheres = 0;
var quantidadeHomens = 0;
var totalAlturaHomens = 0;
var mediaAlturaHomens = "Nenhum homem informado";
var maiorAltura = 0;
var menorAltura = 0; 

for (var i = 0; i < 15; i++) {
    
    var sexo = prompt("Qual o sexo F ou M?");
    var altura = parseFloat (prompt("Qual a altura?"));

    if (i == 0){
        menorAltura = altura;
        maiorAltura = altura;
    }
    else {
        if (altura > maiorAltura) {
            maiorAltura = altura;
        }

        if (altura < menorAltura) {
            menorAltura = altura;
        }
    }

    
    if (sexo.toUpperCase() == "F") {      
        quantidadeMulheres = quantidadeMulheres + 1;  
    }  
    else {       
        quantidadeHomens = quantidadeHomens + 1;
        totalAlturaHomens = totalAlturaHomens + altura;
    }

}

if (quantidadeHomens > 0) {
    mediaAlturaHomens = (totalAlturaHomens / quantidadeHomens).toFixed(2);
}


console.log("A quantidade de mulheres é: " + quantidadeMulheres);
console.log("A média das alturas dos homens é: " + mediaAlturaHomens);
console.log("A maior altura é: " + maiorAltura);
console.log("A menor altura é: " + menorAltura);