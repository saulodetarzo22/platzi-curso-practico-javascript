//Codigo del cuadrado
console.group("Cuadrados")
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;

} 


//console.log("el perimot del cuadrado es: " + perimetroCuadrado+ "cm");


function areaCuadrado(lado){
    return lado * lado;

} 


//console.log("el area del cuadrado es: " + areaCuadrado + "cm2");

console.groupEnd();


console.group("Triangulos")
//Codigo del triangulo


const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo3 = 4;


console.log(
    "Los lados del triangulo miden: "
     + ladoTriangulo1 + " cm," +
      ladoTriangulo2 + " cm, " +
       baseTriangulo3 + "cm,"
       );
const alturaTriangulo = 5.5;
console.log("La altura del triangulo : " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

//console.log("La perimetro del triangulo : " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

//Codigo del circulos

console.group("Circulos");

//Radio



//Diametro
function diametroCirculo(radio){
    return radio * 2;
}

//PI
const PI = Math.PI;
console.log("PI es  : " + PI);

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;

}


//Area

function areaCirculo(radio) {
 return (radio * radio) * PI;
}

console.groupEnd();

// aqui interactuamos con el HTML


function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}


function calcularAreaCuadrado(){

    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
    
}

