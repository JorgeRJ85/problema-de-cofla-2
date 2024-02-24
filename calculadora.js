const sumar =(num1, num2)=>{return parseInt(num1)+parseInt(num2)};

const restar =(num1, num2)=>{return parseInt(num1)-parseInt(num2)};

const multiplicar =(num1, num2)=>{return parseInt(num1)*parseInt(num2)};

const dividir =(num1, num2)=>{
    return parseInt(num1)/parseInt(num2);
};

alert("Que operacion desa realizar");
let operacion= prompt("1-Sumar, 2-Restar, 3-Multiplicar, 4-Dividir");

if (operacion==1) {
    let numero1= prompt("Primer sumero a Sumar");
    let numero2= prompt("Segundo numero a Sumar");
    resultado=sumar(numero1,numero2);
    
    alert(`Tu resultado es ${resultado}`);
}else if (operacion==2) {
    let numero1= prompt("Primer sumero a Restar");
    let numero2= prompt("Segundo numero a Restar");
    resultado=restar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}else if (operacion==3) {
    let numero1= prompt("Primer sumero a multiplicar");
    let numero2= prompt("Segundo numero a multiplicar");
    resultado=multiplicar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}else if (operacion==4) {
    let numero1= prompt("Primer sumero a dividir");
    let numero2= prompt("Segundo numero a dividir");
    resultado=dividir(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}else{
    alert("No se ha encontado la operacion");
};