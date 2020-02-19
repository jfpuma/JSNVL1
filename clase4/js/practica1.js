var nombres =["puma","obduber","pedro","eduardo","carlos"];
var notas = [15,17,20,06,13];
var promedio = 0;

for (i = 0; i < 5; i++){
    console.log(nombres[i]);
    promedio = notas[i]+promedio;
}

promedio = promedio/5;
console.log("El promedio de los estudiantes es: "+ promedio);

function practica14_1(){
    var nombress =["puma","obduber","pedro","eduardo","carlos"];

    nombress.push("Maria");

    alert("en el arreglo hay "+ nombress.length+ " elementos")
    alert(nombress.join(";"));

    nombress.sort();
    alert(nombress.join("#"));

    nombress.pop();
    alert(nombress.join("-"));
}