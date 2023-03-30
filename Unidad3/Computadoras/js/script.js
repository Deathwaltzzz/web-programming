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

    let showCpuP = document.getElementById('cpu')

    showCpuP.addEventListener('click', function cpuMsg(){
        let msg = 'A CPU, or central processing unit, is a type of electronic circuitry that serves as the "brain" of a computer or other digital device. It is responsible for executing instructions that make up software programs, performing calculations, and managing the flow of data within a system.\n' +
            'CPUs come in a variety of different architectures, speeds, and power consumption levels, and are typically identified by their manufacturer and model number. They may also include features like multiple cores or threads, which allow them to perform multiple tasks simultaneously, and specialized instruction sets for specific types of computations.\n' +
            'The performance of a CPU can have a significant impact on the overall speed and responsiveness of a computer or device, as well as its ability to handle complex tasks like gaming or video editing. As a result, CPUs are a critical component of modern computing systems, and their development and evolution are closely watched by computer enthusiasts, engineers, and researchers around the world.    '
        i = 0;
        if(showCpuP.dataset.clicked === 'false'){
            showCpuP.dataset.clicked = 'true';
            showMsg()
            disableButton(showCpuP, 'click',`cpuMsg`)
            function showMsg(){
                if(i < msg.length){
                    document.getElementById('cpuP').innerHTML += msg[i]
                    i++
                    setTimeout(showMsg,2)
                }
            }
        }
        function disableButton(button, trigger, func){
            console.log(trigger + ' ' + func)
            button.removeEventListener('click', cpuMsg,  false);
        }
    })

}


/*Here ends the code of JS for the page index*/

/*Here starts the JS code of the page processors*/

