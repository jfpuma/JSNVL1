var nota, acumNota,cantNotas, nmro;
acumNota = 0;
cantNotas = 0;
function leerEntero(){
    nota = parseFloat(prompt("Ingrese la nota: "+ cantNotas))
    if(isNaN(nota)){
        alert("En las notas deber ser solo numeros!!")
    }else{
        acumNota = acumNota + nota;
    }
}
while(confirm("Desea ingresar una nota??")){
    cantNotas++;
    leerEntero();
}
function otroNumero(){
    nmro = prompt("Ingrese un nmro ")
    if (nmro == null){
        nmro = 50;
    }else{
        nmro = parseFloat(nmro);
        if (isNaN(nmro)){
            alert("Debe escribir solo numeros")
            otroNumero();
        }
    }
}
otroNumero();
//calculos
console.log("El numero ingresado es: "+ nmro)
console.log("La suma de las notas es: "+ acumNota);
var promedio = acumNota/cantNotas;
console.log("El promedio es: "+ promedio);

function pedirMonto(){
    monto = parseFloat(prompt("Ingrese un monto: "))
}