var nmro;

nmro = prompt("Ingrese un numero");
nmro = parseFloat(nmro)

if(isNaN(nmro)){
    alert("El dato no se pudo transformar a numero")
}else {
    alert("La variable se transformo a numero y es: "+ nmro)
}