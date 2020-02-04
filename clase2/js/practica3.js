var sueldo, descuento;

sueldo = prompt("Ingrese el sueldo");
descuento = confirm("Se le aplica descuento") ? descuento = sueldo*0.1 : descuento = 0
sueldoFinal = sueldo - descuento;
console.log("El sueldo ingresado es: "+ sueldo);
console.log("El descuento al sueldo es de: "+ descuento);
console.log("El Sueldo con el descuento es de:"+ sueldoFinal);