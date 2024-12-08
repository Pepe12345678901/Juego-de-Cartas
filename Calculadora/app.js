let num1;
let num2;
let total;
let operador;

num1=parseInt(prompt("num1"))
num2=parseInt(prompt("num2"))
operador=prompt("operador")
if(operador==="+"){
    total=num1+num2
    document.write("La suma es "+total)
}
if(operador==="-"){
    total=num1-num2
    document.write("La resta es "+total)
}
if(operador==="*"){
    total=num1*num2
    document.write("La multiplicacion es "+total)
}
if(operador==="/"){
    total=num1/num2
    document.write("La division es "+total)
}
if(operador==="%"){
    total=num1%num2
    document.write("El porcentaje es "+total)
}