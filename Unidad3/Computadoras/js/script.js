/*This code of JS is going to be in charge of executing actions in the index HTML*/
const scrollToMain = document.getElementById('buttonStartIndex');
var goOn = false;
scrollToMain.addEventListener('click', () =>{
    let name = prompt('What\'s ur name?', ' ')
    let main = document.querySelector('.mainContent');
    console.log(main)
    if(name !== ' ' && name != null){
        let goToP = document.getElementById('modifyIndexC')
        goToP.innerHTML = `Welcome to the page ${name}! here you can see some of the content we will cover in these pages!`;
        goOn = true;
        main.style.display = 'block';
        scrollToMain.style.display = 'none';
        goToP.scrollIntoView()
    }else {
        alert("Error! type a valid name")
        goOn = false;
        document.location.reload();
    }
});

window.onload = () =>{
    console.log("Hello")
    const welcome = document.getElementById('welcomeIndex');
    let welcomeMessage = 'Welcome to the page!';
    let i = 0;
    function writeText(){
        if(i < welcomeMessage.length){
            welcome.innerHTML+= welcomeMessage.charAt(i);
            i++;
            setTimeout(writeText,90)
        }
        return true;
    }
    var button = document.getElementById('buttonStartIndex')
    var goingOp = 10;
    if(writeText()){
        console.log('Write text true')
        function sumOpacity(){
            console.log(`${goingOp} op value`)
            if(goingOp <= 100){
                console.log(goingOp)
                button.style.opacity = `${goingOp}%`;
                goingOp += 10;
                setTimeout(sumOpacity,40)
            }
        }
        sumOpacity();
    }
    writeText()
}
/*Here ends the code of JS for the page index*/

/*Here starts the JS code of the page processors*/

