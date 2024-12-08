let estado;
estado=parseInt(prompt("Introduzca su Estado"))
switch(estado){
    case 1:
        document.writeln("Naciste en el Districto Federal")
        break;
    case 2:
        document.writeln("Naciste en Jalisco")
        break;
    case 3:
        document.writeln("Naciste en Monterrey")
        break;
        default:
            document.writeln("No eres Mexicano")
}