var year, nombre,cursos,sueldoBase,nvoSueldo;

nombre = "Puma";
cursos = Math.random()*6;
year = Math.random()*6;
cursos = Math.round(cursos);
year = Math.round(year);
sueldoBase = 100000;

if (year >= 5){
    nvoSueldo = (sueldoBase*0.1)+sueldoBase;
}else nvoSueldo = sueldoBase;

if (cursos > 3){
    nvoSueldo = nvoSueldo+25000;
}else nvoSueldo = nvoSueldo;

console.log("Nombre: "+ nombre +" Sueldo Base: "+ sueldoBase +" Años de servicio: "+ year +" Cursos realizados: "+ cursos +" Nuevo sueldo: "+ nvoSueldo);
