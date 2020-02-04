var precioA, precioB,precioC,cantidad,tipo,montoCompra, nombre, text;

nombre = "Puma"
tipo = Math.random()*3;
tipo = Math.round(tipo);
cantidad = Math.random()*15;
cantidad = Math.round(cantidad);

precioA = 141246.25;
precioB = 98720;
precioC = 58900;

switch(tipo){
    case 1:
        montoCompra = cantidad*precioA;
        tipo = "A";
        break;
    case 2:
        montoCompra = cantidad*precioB
        tipo = "B";
        break;
    case 3:
        montoCompra = cantidad*precioC;
        tipo = "C";
        break;   
    default:
    tipo = "No eligio ningun tipo"
    cantidad = "No compro ningun pantalon"
    montoCompra = "No compro Nada"       
}

console.log("Nombre: "+ nombre)
console.log("Tipo de pantalon a comprar: "+ tipo)
console.log("Cantidad de pantalones a comprar: "+ cantidad)
console.log("Monto total de la compra: "+ montoCompra)
