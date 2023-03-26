function getTemp(){
    var far = prompt("Ingresa la temperatura en Cels", " ");
    var cels;
    console.log(far)
    if(far === " ")
        alert("Ingresa una temperatura valida!")
    else if(!isNaN(far) && far != null){ //Comprueba que la temperatura sea un numero
        cels = (far - 32) * (5/9)
        document.getElementById("mensajeTemp").innerHTML = "La temperatura en farenheit de: " + far + " es igual a: " + cels + " celsius"
        if(cels >20){
            document.body.className = "warm";
        }else if(cels <10)
            document.body.className = "cold"
    }
}

function doDate()
{
    var str = "";

    var days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    var months = ["Enero", "Marzo", "Miercoles", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    var now = new Date();

    str += "La fecha de hoy es: " + days[now.getDay()] + ", " + now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear() + " " + now.getHours() +":" + now.getMinutes() + ":" + now.getSeconds();
    document.getElementById("bottom").innerHTML = str;
}

setInterval(doDate, 1000);