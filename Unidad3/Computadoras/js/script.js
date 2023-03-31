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
//     I worked first on the 4th page, that's why its here xd
}else if(window.location.href.includes('os.html')){
    window.onload = () =>{
        // Reloads the page when the logo is clicked
        document.querySelector('.logoT').addEventListener('click',()=>{
            location.reload();
        })
        // Loads the first text of description for the page, later is gonna be used as a container for every os description
        document.querySelector('.context p').innerHTML = 'An operating system (OS) is a software program that manages computer hardware and provides common services for computer programs. Windows is an operating system created by Microsoft, Linux is an open-source operating system, and Mac OS is an operating system created by Apple Inc. They have evolved significantly over the years, becoming more user-friendly, feature-rich, and secure, and play a critical role in enabling people to use computers for various purposes.'
        var imgs = ['../media/imgs/MS-DOS_logo_outlined.svg.png','../media/imgs/tux.png','../media/imgs/windows-95-logo-1864241.webp','../media/imgs/w7.webp','../media/imgs/ubuntu.webp','../media/imgs/kali.jpg','../media/imgs/fedora32.jpg','../media/imgs/w10.png']
        const ids = ['msdos','linux','w95','w7','ubuntu','kali','fedora','w10']
        // Appending the 8 elements of the array to the html with a function
        function addArray(imgs){
            if(document.getElementsByClassName('changeOs').item(0).dataset.clicked === 'false'){
                for (let i = 0; i < imgs.length; i++) {
                    document.getElementById('content').innerHTML += `<div id=${ids[i]}><img class="os" src="${imgs[i]}"></div>`
                }
                changeArray()
                document.getElementsByClassName('changeOs').item(0).dataset.clicked = 'true';
                loadInfo()
            }else{
                for (let i = 0; i < imgs.length; i++) {
                    document.getElementById('content').innerHTML += `<div id=${ids[i]}><img class="os" src="${imgs[i]}"></div>`
                }
            }
        }
        const addArrays = document.getElementById('disappearThis');
        // When you click the button to load the images it calls the function
        addArrays.addEventListener('click',() =>{
            addArrays.style.display = 'none'
            addArray(imgs);
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
                        imgs[4] = possible[parseInt(changeArr)-1]
                        removeArray()
                        addArray(imgs)
                        document.getElementById(`ubuntu`).id = 'mac'
                        loadInfo()
                        break;
                    case 2:
                        imgs[4] = possible[parseInt(changeArr)-1]
                        removeArray();
                        addArray(imgs)
                        document.getElementById(`ubuntu`).id = 'android'
                        loadInfo()
                        break;
                    default:
                        alert('The page will reload!')
                        window.location.reload();
                        break;
                }
            })
        }
        // Is the one in charge to load a description of every os in the page
        function loadInfo(){
            var infoimgs = document.querySelectorAll('div.content div');
            console.log(infoimgs)
            for (let i = 0; i < infoimgs.length; i++) {
                const info = infoimgs[i]
                info.addEventListener('click',()=>{
                    var id = info.id;
                    switchInfo(id)
                })
            }
            function switchInfo(id){
                let switcher = document.querySelector('.context p');
                switch(id){
                    //const ids = ['msdos','linux','w95','w7','ubuntu','kali','fedora','w10']
                    case 'linux':
                        switcher.innerHTML = 'Linux is a family of open-source operating systems that are based on the Unix operating system. It was first created by Linus Torvalds in 1991 and has since grown to become one of the most popular and widely used operating systems in the world. Linux is known for its flexibility and customizability, as well as its stability and security. It is used in a wide range of devices, from servers and supercomputers to mobile phones and embedded devices. One of the key features of Linux is its ability to run multiple programs simultaneously, allowing for greater efficiency and productivity. Additionally, Linux has a large and active community of developers who contribute to its ongoing development and improvement, and many popular software applications are available for Linux.'
                        break;
                    case 'msdos':
                        switcher.innerHTML = 'MS-DOS (short for Microsoft Disk Operating System) is an operating system for personal computers that was developed by Microsoft Corporation in the early 1980s. It was one of the most widely used operating systems during the 1980s and 1990s, particularly in the IBM PC-compatible market. MS-DOS was a command-line interface operating system, which means that users interacted with the system by typing commands on a keyboard. It did not have a graphical user interface like modern operating systems do. MS-DOS provided a basic set of tools and commands for managing files, running programs, and interacting with hardware devices such as printers and disk drives. Although it has been largely superseded by more modern operating systems such as Microsoft Windows, some versions of MS-DOS are still used in embedded systems and other specialized applications.'
                        break;
                    case 'w95':
                        switcher.innerHTML = 'Windows 95 was a major operating system release by Microsoft, launched in 1995. It was the successor to Windows 3.1 and was designed to be more user-friendly and feature-rich than its predecessors. Windows 95 introduced many new features that are now considered standard in modern operating systems, such as the Start menu, taskbar, and plug-and-play support for hardware devices. It also included long filenames (up to 255 characters), 32-bit software support, and the ability to run multiple programs simultaneously without requiring a separate program manager. Windows 95 was the first Windows operating system to become widely popular and was a major milestone in the history of personal computing. It was eventually superseded by newer versions of Windows, but its impact can still be felt in many aspects of modern computing.';
                        break;
                    case 'w7':
                        switcher.innerHTML = 'Windows 7 is an operating system developed by Microsoft Corporation and released in 2009. It was the successor to Windows Vista and offered many improvements over its predecessor, including faster boot times, improved performance, and a more streamlined interface. Windows 7 was designed to be more user-friendly and intuitive than previous versions of Windows, with features such as Jump Lists, Aero Snap, and the ability to create homegroups for easy file sharing. It also included improved support for touchscreens and mobile devices, as well as enhanced security features such as BitLocker encryption and AppLocker application control. Windows 7 was a very popular operating system and remained so until its end-of-life in January 2020, at which point Microsoft stopped providing support and security updates for the system.'
                        break;
                    case 'ubuntu':
                        switcher.innerHTML = 'Ubuntu is a free and open-source Linux-based operating system that is based on the Debian architecture. It was created by Canonical Ltd. and released in 2004. Ubuntu is known for its ease of use, simplicity, and user-friendly interface, and it is designed to be accessible to users of all levels of experience. It comes with a wide range of pre-installed software applications, including a web browser, email client, office suite, media player, and more. Additionally, Ubuntu has a large and active community of developers and users who contribute to its development and provide support and resources for users. Ubuntu is a popular choice for both desktop and server environments, and it is used by individuals, organizations, and governments around the world.'
                        break;
                    case 'kali':
                        switcher.innerHTML = 'Kali Linux is a Debian-based Linux distribution that is designed for digital forensics, penetration testing, and security auditing. It was created by Offensive Security, a cybersecurity training company, and was first released in 2013. Kali Linux includes a wide range of tools and utilities that are commonly used by security professionals and hackers for network analysis, vulnerability scanning, password cracking, and other security-related tasks. Some of the tools included in Kali Linux are Nmap, Metasploit, John the Ripper, Wireshark, and Aircrack-ng. Kali Linux is known for its security-focused features, and it is widely used by security professionals, researchers, and students in the field of cybersecurity.'
                        break;
                    case 'fedora':
                        switcher.innerHTML = 'Fedora is a free and open-source Linux-based operating system that is sponsored by Red Hat. It was first released in 2003 and is designed to be a cutting-edge operating system that showcases the latest technologies and features in the open-source community. Fedora is known for its rapid development cycle and its commitment to staying up-to-date with the latest software releases. It includes a wide range of pre-installed software applications, including a web browser, office suite, media player, and development tools. Fedora is also known for its support for containerization technologies such as Docker and Kubernetes, which make it popular with developers and DevOps professionals. Additionally, Fedora has a large and active community of developers and users who contribute to its ongoing development and improvement. Fedora is often used as a desktop operating system, but it can also be used in server and cloud environments.'
                        break;
                    case 'w10':
                        switcher.innerHTML = 'Windows 10 is an operating system developed by Microsoft Corporation and released in 2015. It is the successor to Windows 8.1 and was designed to be more familiar and user-friendly than its predecessor. Windows 10 includes a wide range of features and improvements, including the return of the Start menu, virtual desktops, a new web browser (Microsoft Edge), and improved multitasking capabilities. It also includes support for new technologies such as Cortana (a voice-activated personal assistant), the Windows Hello biometric authentication system, and the Microsoft Store for downloading and installing apps. Windows 10 is designed to work across a wide range of devices, including desktops, laptops, tablets, and mobile phones, and it includes support for touchscreens and stylus input. It is also known for its regular feature updates and security patches, which are designed to keep the operating system up-to-date and secure. Windows 10 is currently the most widely used desktop operating system in the world.'
                        break;
                    case 'android':
                        switcher.innerHTML = 'Android is a mobile operating system developed by Google and designed primarily for touchscreen devices such as smartphones, tablets, and smartwatches. It was first released in 2008 and has since become the most widely used mobile operating system in the world. Android is based on the Linux kernel and is open-source, meaning that its source code is available for anyone to use and modify. Android includes a wide range of built-in features and applications, such as a web browser, email client, calendar, contacts, messaging app, and Google Play Store for downloading and installing additional apps. Android also includes support for various connectivity options such as Wi-Fi, Bluetooth, and mobile data, as well as features like voice recognition, location services, and advanced camera capabilities. Android is known for its flexibility and customization options, and it is used by a wide range of manufacturers to power their devices.'
                        break;
                    case 'mac':
                        switcher.innerHTML = 'Mac OS is a series of proprietary operating systems developed by Apple Inc. for their Macintosh line of computers. The first version of Mac OS was released in 1984, and since then, it has gone through several major revisions and name changes. The latest version is called macOS Monterey, which was released in 2021. macOS is known for its user-friendly interface and design, as well as its seamless integration with other Apple products and services, such as iCloud, iMessage, and FaceTime. It includes a range of pre-installed software applications, such as a web browser, email client, office suite, media player, and creative tools like iMovie and GarageBand. macOS is based on the Unix operating system and includes a terminal interface for advanced users and developers. It is also known for its strong security features, such as Gatekeeper, FileVault, and the use of the Apple T2 Security Chip. macOS is exclusive to Apple hardware and is not available for use on other manufacturers\' computers.';
                        break;


                }
            }
        }
        // Removes the previously appended images to load the new array modifying the 5th index
        function removeArray(){
            document.getElementById('content').innerHTML = " ";
        }

        const selectBg = document.querySelectorAll('.logo')
        console.log(selectBg)
        for (let i = 0; i < selectBg.length; i++) {
            let selected = selectBg[i]
            selected.addEventListener('click',()=>{
                switchBg(selected.id)
            })
        }

        function switchBg(id){
            console.log(id)
            switch(id){
                case 'win':
                    document.body.style.background = 'url(../media/imgs/Windows-11-Bloom-Screensaver-Dark-scaled.jpg) fixed'
                    document.body.style.backgroundSize = '100%'
                    break;
                case 'lin':
                    document.body.style.background = 'url(../media/imgs/linuxWall.png'
                    document.body.style.backgroundSize = '100%'
                    break;
            }
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


