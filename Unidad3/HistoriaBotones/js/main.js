/*
*Este codigo de JS basicamente lo que hace es usar funciones de botones que estan en la estructura de lhtlm
* modificando el contenido de un innerHTML o modificando los atributos de un style para ir mostrando la conversacion
*/


function getFirstMessages(){
    document.getElementById("first").innerHTML = "Que onda pai"
    document.getElementById("second").innerHTML = "Que cuentas"
}

function getThird() {
    document.getElementById("third").innerHTML = "Ya escuchaste la nueva rola de linkin park????"
    document.getElementById("but1").style.display = "none"
    document.getElementById("4th").style.display = "flex"
}

function get4th(){
    document.getElementById("fourth").innerHTML="No we, abr"
    document.getElementById("but2").style.display = "none"
    document.getElementById("5th").style.display = "flex"
}

function get5th(){
    document.getElementById("but3").style.display = "none";
    document.getElementById("fifth").style.display = "block";
    document.getElementById("next5").style.display = "flex";
    document.getElementById("6th").style.display = "flex";
}

function get6th(){
    document.getElementById("but4").style.display = 'none';
    document.getElementById("sixth").innerHTML = "Ufff, que joyita de cancion, una obra de arte"
    document.getElementById("next6").style.display = "flex";
    document.getElementById("7th").style.display = "flex"
}

function get7th(){
    document.getElementById("but5").style.display = "none"
    document.getElementById("seventh").style.display = "block";
    document.getElementById("8th").style.display = "flex"
}

function get8th(){
    document.getElementById("but6").style.display = "none"
    document.getElementById("eight").innerHTML = "No manches, se ve con todo. En especial por Korn"
    document.getElementById("9th").style.display = "flex"
}

function get9th(){
    document.getElementById("but7").style.display = "none"
    document.getElementById("ninth").innerHTML = "Hay que ir amigou, para ir juntando lana desde ahorita"
    document.getElementById("10th").style.display = "flex"

}

function get10th(){
    document.getElementById("but8").style.display = "none"
    document.getElementById("tenth").style.display = "block"
}