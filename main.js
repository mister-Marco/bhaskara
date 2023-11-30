var valorA = prompt("Informe o valor de a:");
var valorB = prompt("Informe o valor de b:");
var valorC = prompt("Informe o valor de c:");
var coeficiente1;
var coeficiente2;
var delta = (valorB*valorB)-4*valorA*valorC;

document.write("Valor de Delta =>"+ delta +"<br/><br/>");

if(delta<0){
    document.write("Para Delta NEGATIVO, não exitem raízes rais.<br/>");
}
else{
    document.write("Para delta POSITIVO, possuimos DUAS raízes reais: <br/>");
    coeficiente1 = (-valorB + Math.sqrt(delta)) / (2 * valorA);
    coeficiente2 = (-valorB - Math.sqrt(delta)) / (2 * valorA);

    document.write("x1 = " + coeficiente1 + "<br/>");
    document.write("x2 = " + coeficiente2 + "<br/>");
}