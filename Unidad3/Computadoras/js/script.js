// Im using a if to check what html im working with, this way some variables, const or lets don't screw things up
if(window.location.href.includes('index.html')){
    /*This code of JS is going to be in charge of executing actions in the index HTML*/
    const scrollToMain = document.getElementById('buttonStartIndex');
    var goOn = false;
    // Scrolls to the main content of the index page
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
        // Function to show the welcome message, creating a type effect
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
            // Recursive function which crates a 'fading' effect
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
        var isRunning = false;
        let showCpuP = document.getElementById('cpu')
        // I crated this fuction with the mere purpose of verifying if some piece of code is running
        function running(value){
            isRunning = value;
        }
        // There is 3 codes that are very similar to this, pretty much cuz they are, the difference is that they load different messages onto the page
        showCpuP.addEventListener('click', function cpuMsg(){
            if(!isRunning){
                console.log(isRunning + ' e')
                let msgC = 'A CPU, or central processing unit, is a type of electronic circuitry that serves as the "brain" of a computer or other digital device. It is responsible for executing instructions that make up software programs, performing calculations, and managing the flow of data within a system.\n' +
                    'CPUs come in a variety of different architectures, speeds, and power consumption levels, and are typically identified by their manufacturer and model number. They may also include features like multiple cores or threads, which allow them to perform multiple tasks simultaneously, and specialized instruction sets for specific types of computations.\n' +
                    'The performance of a CPU can have a significant impact on the overall speed and responsiveness of a computer or device, as well as its ability to handle complex tasks like gaming or video editing. As a result, CPUs are a critical component of modern computing systems, and their development and evolution are closely watched by computer enthusiasts, engineers, and researchers around the world.    '
                i = 0;
                if(showCpuP.dataset.clicked === 'false'){
                    showCpuP.dataset.clicked = 'true';
                    showMsg()
                    disableButton(showCpuP, 'click',`cpuMsg`)
                    // Same typing effect as before
                    function showMsg(){
                        console.log(isRunning)
                        if(i < msgC.length){
                            document.getElementById('cpuP').innerHTML += msgC[i]
                            i++
                            setTimeout(showMsg,2)
                            running(true)
                        }
                        if(i === msgC.length){
                            running(false)
                            console.log(isRunning)
                            console.log(`${i}, ${msgC.length}`)
                        }

                    }
                }
                function disableButton(button, trigger, func){
                    console.log(trigger + ' ' + func)
                    button.removeEventListener('click', cpuMsg,  false);
                }
                console.log(isRunning)
            }
        })

        let showGpuP = document.getElementById('gpu')
        showGpuP.addEventListener('click',function gpuMsg(){
            if(!isRunning){
                let msgG = 'A graphics card, also known as a video card or GPU (graphics processing unit), is a specialized circuit board designed to handle the processing and rendering of visual data for display on a computer monitor or other output device.\n' +
                    'The graphics card is responsible for performing a variety of tasks related to graphics rendering, including geometry processing, texture mapping, lighting calculations, and shading. These tasks require a great deal of computational power, and graphics cards are designed with specialized hardware to accelerate these operations.\n' +
                    'Modern graphics cards often include dedicated memory, called VRAM (video random access memory), which is used to store and manipulate large amounts of graphical data. They may also feature multiple cores or processing units, allowing them to handle multiple tasks simultaneously.\n' +
                    'The performance of a graphics card can have a significant impact on the quality and speed of visual applications like gaming, video editing, and 3D modeling. As a result, graphics cards are a critical component in many high-end computer systems, and are a key area of development and innovation in the computer hardware industry.'
                i = 0;
                if(showGpuP.dataset.clicked === 'false'){
                    showGpuP.dataset.clicked = 'true';
                    showMsg()
                    disableButton(showGpuP, 'click',`cpuMsg`)
                    function showMsg(){
                        if(i < msgG.length){
                            document.getElementById('gpuP').innerHTML += msgG[i]
                            i++
                            setTimeout(showMsg,2)
                            running(true)
                        }else if(i===msgG.length)
                            running(false)
                    }
                }
                function disableButton(button, trigger, func){
                    console.log(trigger + ' ' + func)
                    button.removeEventListener('click', gpuMsg,  false);
                }
            }
        })

        let showOsP = document.getElementById('os')
        showOsP.addEventListener('click', function osMsg(){
            if(!isRunning){
                let msg= 'An operating system (OS) is a software program that manages the hardware and software resources of a computer system. It provides a common platform for computer programs to run on, and manages the allocation of resources like memory, processing power, and storage.\n' +
                    'The operating system provides a user interface that allows users to interact with the computer and its resources. This can include graphical interfaces like desktop environments or command-line interfaces that allow users to enter commands and perform tasks.\n' +
                    'The OS is responsible for managing the system\'s security, including user access control and protection against malware and other threats. It also handles system updates and maintenance tasks like file management, backup and recovery, and device driver updates.\n' +
                    'There are many types of operating systems, including popular options like Microsoft Windows, Apple macOS, and Linux. Each operating system has its own unique features, capabilities, and limitations, and may be optimized for specific types of hardware or software applications. The choice of operating system can have a significant impact on the overall functionality and performance of a computer system.'
                i = 0;
                if(showOsP.dataset.clicked === 'false'){
                    showOsP.dataset.clicked = 'true'
                    showMsg()
                    disableButton()
                    function showMsg(){
                        if(i < msg.length){
                            document.getElementById('osP').innerHTML += msg[i]
                            i++
                            setTimeout(showMsg,2)
                            running(true)
                        }else if(i===msg.length)
                            running(false)
                    }
                }
                function disableButton(button, trigger, func){
                    console.log(trigger + ' ' + func)
                    button.removeEventListener('click', osMsg,  false);
                }

            }
        })

    }

    /*Here ends the code of JS for the page index*/
}else if(window.location.href.includes('processors.html')){
    /*Here starts the JS code of the page processors*/
    window.onload = () =>{
        const firstButton = document.getElementById('firstButtonCpu');
        const secondButton = document.getElementById('secondButtonCpu')
        const thirdButton = document.getElementById('thirdButtonCpu')
        // Does the same to verify if a code is running
        var isActive = false;
        function activate(value){
            isActive = value
        }
        var i = 10;
        // Fade effect
        firstButton.addEventListener('click',()=>{
            console.log(isActive)
            show2ndButton()
            function show2ndButton(){
                if(i < 100){
                    secondButton.style.opacity = `${i}%`
                    console.log(secondButton.style.opacity)
                    i+=10;
                    setTimeout(show2ndButton,40)
                }else if(i === 100) {
                    activate(true);
                }
            }
        })
        var og;
        var restarted = false;
        // Changes the text depending on what data attribute is passing in, goes from 0 to 4 and resets pretty much eternally
        secondButton.addEventListener('click', () =>{
            if(isActive){
                let modify = document.getElementById('modifyPCpu');
                console.log('a')
                let currentClick = document.querySelector('[data-clicked]');
                if(currentClick.dataset.clicked === '0'){
                    og = modify.innerHTML;
                    console.log(og)
                }
                console.log(currentClick.dataset.clicked);
                let x = parseInt(currentClick.dataset.clicked)
                currentClick.dataset.clicked = (x+=1).toString()
                let current = parseInt(currentClick.dataset.clicked)
                if(restarted === true){
                    modify.innerHTML = og;
                    console.log('entro')
                    currentClick.dataset.clicked = '0';
                    secondButton.innerHTML='Continue...';
                    restarted = false;
                }
                switch (current){
                    case 1:
                        modify.innerHTML = 'In the 1970s, the first microprocessors were developed. These were single-chip CPUs that could be used in a variety of devices, including personal computers. The first commercially successful microprocessor was the Intel 4004, which was released in 1971. It had a clock speed of 740 kHz and was capable of executing 92,000 instructions per second.<br>' +
                            'Throughout the 1970s and 1980s, CPUs continued to evolve rapidly. The Intel 8086, released in 1978, was the first 16-bit microprocessor, and it formed the basis of the IBM PC. The 8086 was succeeded by the 80286, 80386, and 80486, each of which offered significant improvements in speed and functionality.'
                        break;
                    case 2:
                        modify.innerHTML = 'In the 1990s, the era of the Pentium processor began. The Pentium was the successor to the 80486 and was introduced in 1993. It was the first processor to use the x86 architecture, which is still used today in many modern CPUs. The Pentium also introduced the concept of superscalar architecture, which allowed for multiple instructions to be executed simultaneously.<br>' +
                            'In the early 2000s, the era of the multi-core processor began. Multi-core processors are CPUs that contain two or more processing cores on a single chip. This allowed for even greater processing power and efficiency. The first multi-core processors were introduced by AMD and Intel in 2005.'
                        break;
                    case 3:
                        modify.innerHTML = 'In the years since, CPUs have continued to evolve, with advances in areas such as clock speed, power consumption, and architecture. Today, CPUs are used in a wide variety of devices, including desktop and laptop computers, smartphones, tablets, and gaming consoles.<br>' +
                            'The future of CPUs is likely to involve continued advances in areas such as artificial intelligence and machine learning. As these technologies become more widespread, CPUs will need to be capable of executing increasingly complex instructions at faster speeds and with greater efficiency. The development of new materials, such as graphene, may also play a role in the future of CPUs, as they offer the potential for even greater processing power and energy efficiency.'
                        secondButton.innerHTML='Reset';
                        restarted = true;
                        break;
                }
            }

        })
        // Sends you to the second page
        thirdButton.addEventListener('click',() =>{
            window.location.href = 'Gpus.html';
        })
    }
//     I worked first on the 4th page, thats why its here xd
}else if(window.location.href.includes('os.html')){
    window.onload = () =>{
        document.querySelector('.context p').innerHTML = 'An operating system (OS) is a software program that manages computer hardware and provides common services for computer programs. Windows is an operating system created by Microsoft, Linux is an open-source operating system, and Mac OS is an operating system created by Apple Inc. They have evolved significantly over the years, becoming more user-friendly, feature-rich, and secure, and play a critical role in enabling people to use computers for various purposes.'
        const imgs = ['../media/imgs/MS-DOS_logo_outlined.svg.png','../media/imgs/tux.png','../media/imgs/windows-95-logo-1864241.webp','../media/imgs/w7.webp','../media/imgs/ubuntu.webp','../media/imgs/kali.jpg','../media/imgs/fedora32.jpg','../media/imgs/w10.png']
        const ids = ['msdos','linux','w95','w7','ubuntu','kali','fedora','w10']
        // Appending the 8 elements of the array to the html with a function
        function addArray(){
            for (let i = 0; i < imgs.length; i++) {
                document.getElementById('content').innerHTML += `<div id=${ids[i]}><img class="os" src="${imgs[i]}"></div>`
            }
            changeArray()
        }
        const addArrays = document.getElementById('disappearThis');
        // When you click the button to load the images it calls the function
        addArrays.addEventListener('click',() =>{
            addArrays.style.display = 'none'
            addArray();
        })
        // After the function to load images is called, it will then call another function to ensure that the script doesn't break.
        function changeArray(){
            const change = document.getElementById(`${ids[4]}`)
            const possible = ['../media/imgs/Finder_Icon_macOS_Big_Sur.png','../media/imgs/Android_robot.svg.png'];
            const possibleOptions = ['1. Mac OS','2. Android']
            console.log(possibleOptions.toString())
            document.getElementsByClassName('changeOs').item(0).addEventListener('click',() =>{
                let changeArr = prompt(`What OS you wish to load to the images?, possible options are: ${possibleOptions.toString()}, ANY OTHER VALUE WILL RELOAD THE PAGE`, ' ');
                switch (parseInt(changeArr)){
                    case 1:
                        change.innerHTML = `<img class="os" src="${possible[parseInt(changeArr)-1]}">`
                        break;
                    case 2:
                        change.innerHTML = `<img class="os" src="${possible[parseInt(changeArr)-1]}">`
                        break;
                    default:
                        alert('The page will reload!')
                        window.location.reload();
                        break;
                }
            })
        }
    }
}else if(window.location.href.includes('Gpus.html')){
    window.onload = () =>{
        console.log('e')
        // This one is a pretty simple code, it just wait for a button tu be clicked and loads a dl into a p tag
        document.getElementById('buttonGpu').addEventListener('click',() =>{
            const ps = document.getElementsByTagName('p');
            for (let i = 0; i < ps.length; i++) {
                let x = ps.item(i)
                if(x.className === 'toShow'){
                    x.innerHTML = `
                                    <h1>3 Examples</h1>
                                    <br>
                                    <dl>
                                      <dt><strong>Nvidia GeForce RTX 3080:</strong></dt>
                                        <dd>A high-performance GPU designed for gaming and other graphics-intensive applications.</dd>
                                      <dt><strong>AMD Radeon RX 6900 XT:</strong></dt>
                                        <dd>A powerful GPU designed for high-end gaming and content creation.</dd>
                                      <dt><strong>Nvidia A100:</strong></dt>
                                        <dd>A specialized GPU designed for use in data centers and high-performance computing applications.</dd>
                                    </dl> `
                }
            }
            document.getElementById('buttonGpuD').innerHTML += `<br><a href="os.html">Click here to visit the page OS!</a>`
        })
    }
}


