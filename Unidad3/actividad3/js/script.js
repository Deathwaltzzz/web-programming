/*Esta funcion llamada switchPage() recibe como parametro el numero de pagina a la que se esta haciendo referencia para poder cambiar de pagina dentro del html.
* La forma en la que funciona es que se cambian los style del elemento que contenga la clase "is-active" a una clase vacia simplemente por comodidad llamada "unactive"
* (me equivoque, es inactive pero me dio flojera cambiarla lmao). Despues utiliza un switch donde dependiendo de la pagina que recive sera la nueva, que es el indice
* Y usando un switch se decidira que div sera visible para el contenido*/
function switchPage(page){
    let current = document.getElementsByClassName("is-active").item(0)
    if(parseInt(current.id) === parseInt(page)) return;
    current.className = "inactive";
    document.getElementById(page).className = "is-active";
    let toRemove = document.getElementsByClassName("active").item(0);
    document.getElementsByClassName("active").item(0).className = toRemove.classList[0];
    switch(page){
        case 1:
            document.getElementById("inicio").className = "inicio active";
            location.reload()
            break;
        case 2:
            document.getElementById("ops").className = "ops active";
            break;
        case 3:
            window.location.href = "https://steamcharts.com/app/359550";
            break;
    }
}

/*Este metodo es masomenos lo mismo que el switchPage, la diferencia es que este en vez de switchear como tal el div cambia el contenido del html buscando la id a cambiar
* Es un metodo un poco mas curioso el como funciona ya que uso los atributos data para hacer mas facil la asignacion de is-active a comparacion de depender de la id ya que asi no tengo
* que repetir las id ya que seria un problema ya que por lo general las id las uso numeradas y no se pueden repetir
* Por alguna razon aunque el dataset.page devuelva un numero no lo castea como tal por lo que tengo que parsarlo a un entero para ser comparado*/
function switchList(page){
    var current = document.getElementsByClassName("lis-active").item(0);
    var newPage = 0;
    console.log(current.dataset.page + ", " + page)
    let size = document.getElementsByClassName("inactive").length;
    if(parseInt(current.dataset.page) === parseInt(page)) return;
    for (let i = 0; i < size; i++) {
        if(parseInt(document.getElementsByClassName("inactive").item(i).dataset.page)  === parseInt(page)){
            newPage = document.getElementsByClassName("inactive").item(i);
            break;
        }
    }
    newPage.className = "lis-active";
    current.className = "inactive"
    console.log(newPage)

    let switcherP = document.getElementById("switcher");
    let switcherImg = document.getElementById("switcherImg");
    switch (page){
        case 1:
            switcherP.innerHTML = "El modo de juego \"Bomba\" en Rainbow Six es uno de los modos más populares y competitivos en el juego. Cada ronda se divide en dos fases, la fase de preparación y la fase de acción. En la fase de preparación, los defensores tienen un tiempo limitado para preparar sus defensas y barricadas en los sitios de bombas mientras que los atacantes utilizan drones para localizar las bombas y la posición de los defensores. En la fase de acción, los atacantes tienen un tiempo limitado para infiltrarse en la zona de la bomba, plantarla y protegerla mientras los defensores intentan evitar que la planten y desactivarla si es plantada.\n La clave para ganar en el modo de juego \"Bomba\" es la estrategia, la comunicación y la cooperación en equipo. Los atacantes necesitan trabajar juntos para superar las defensas de los defensores y plantar la bomba mientras que los defensores necesitan coordinar sus esfuerzos para proteger los sitios de bombas y evitar que los atacantes los planten. Con muchos elementos tácticos y de estrategia, el modo \"Bomba\" ofrece una experiencia emocionante y desafiante para los jugadores en Rainbow Six."
            switcherImg.src = "../media/imgs/R6_Bomb.webp"
            break;
        case 2:
            switcherP.innerHTML = "\"Asegurar el área\" es un modo de juego en Rainbow Six en el que dos equipos, atacantes y defensores, compiten para asegurar y controlar una zona en el mapa. El objetivo de los defensores es proteger la zona de los atacantes, mientras que el objetivo de los atacantes es infiltrarse en la zona y tomar el control de ella. El juego se juega en varias rondas, y el equipo que gana la mayoría de las rondas al final de la partida gana el juego. \nEn cada ronda, los defensores deben evitar que los atacantes entren en la zona de seguridad y permanecer allí durante un tiempo determinado. Los defensores pueden fortificar puertas y paredes para proteger la zona, mientras que los atacantes pueden utilizar drones para localizar y detectar enemigos antes de entrar en la zona. Si los atacantes logran entrar en la zona y permanecer allí hasta que el temporizador llegue a cero, ganan la ronda. Si los defensores logran repeler a los atacantes y mantener la zona bajo su control hasta que el temporizador llegue a cero, ganan la ronda. Con una combinación de estrategia y trabajo en equipo, \"Asegurar el área\" es un modo de juego emocionante y desafiante en Rainbow Six."
            switcherImg.src = "../media/imgs/Border_Secure_Armory_Lockers_2F.webp"
            break;
        case 3:
            switcherP.innerHTML = "El modo de juego \"Rescate de rehén\" en Rainbow Six es un desafío emocionante que requiere habilidad, estrategia y coordinación. Los equipos atacantes y defensores deben trabajar juntos para lograr sus objetivos, ya sea protegiendo o rescatando al rehén. Los atacantes deben infiltrarse en el edificio fortificado y encontrar al rehén sin ser detectados por los defensores. Por otro lado, los defensores deben proteger al rehén y evitar que los atacantes lo rescaten.\n Cada ronda de \"Rescate de rehén\" es tensa y emocionante, ya que los jugadores deben ser rápidos en su acción y estar en constante comunicación para tener éxito. La estrategia juega un papel fundamental, ya que los equipos pueden establecer trampas y utilizar el diseño del edificio a su favor. En resumen, \"Rescate de rehén\" es un modo de juego emocionante que pone a prueba las habilidades y la estrategia de los jugadores de Rainbow Six en una situación de alta presión. "
            switcherImg.src = "../media/imgs/RainbowSixSiege.jpg"
            break;
        case 4:
            switcherP.innerHTML = "Las clasificatorias en Rainbow Six son una oportunidad para que los jugadores demuestren su habilidad y compitan contra otros jugadores de un nivel similar. Los jugadores compiten en partidas clasificatorias para ganar puntos y subir de rango en el sistema de clasificación. Los jugadores más exitosos son recompensados ​​con títulos especiales, premios en el juego y la oportunidad de competir en torneos oficiales. \nLas clasificatorias son una forma emocionante de jugar Rainbow Six y permiten a los jugadores enfrentarse a otros jugadores igualmente habilidosos. A medida que los jugadores progresan en la clasificación, las partidas se vuelven más desafiantes y emocionantes. Los jugadores deben trabajar en equipo, comunicarse efectivamente y ajustar su estrategia para tener éxito en las clasificatorias. En resumen, las clasificatorias en Rainbow Six son una oportunidad emocionante para que los jugadores compitan en un entorno competitivo y demuestren su habilidad y estrategia en el juego."
            switcherImg.src = "../media/imgs/ranked.webp"
            break;
    }
}

/*Este metodo tiene los mismos fundamentos que los otros pero este es relativamente mas facil ya que solo estoy modificando el valor del html ya que como tal no estoy creando una clase
* is-active o algo asi, solamente cambio los valores por lo que no dependo de tener que buscar clases y mas, solo cambiar el html dependiendo del valor que reciba*/
function switchOp(page){
    console.log(page)
    let toChangeBg = document.getElementById("divOps");
    let toChangeP = document.getElementById("pOps");
    let toChangeH1 = document.getElementById("h1Ops");
    // Este arreglo contiene los diferentes valores que puede tener el wallpaper del div donde contiene el texto
    const backgrounds = [
        "radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,252,200,.8) 0%, rgba(255,247,94,.8) 90% )",
        "linear-gradient( 112.7deg,  rgba(253,185,83,.8) 11.4%, rgba(255,138,0,.8) 70.2% )",
        "linear-gradient( 177.8deg,  rgba(255,128,0,0.8) 9.2%, rgba(232,211,59,0.8) 86.8% )",
        "linear-gradient( 109.6deg,  rgba(39,142,255,.8) 11.2%, rgba(98,113,255,0.78) 100.2% )",
        "linear-gradient( 113.9deg,  rgba(255,7,7,.8) -4.5%, rgba(255,255,5,.8) 98.8% )",
        "linear-gradient( 171.8deg,  rgba(5,111,146,.8) 13.5%, rgba(6,57,84,.8) 78.6% )",
        "radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,252,200,.8) 0%, rgba(255,247,94,.8) 90% )",
        "radial-gradient( circle 976px at 51.2% 51%,  rgba(11,27,103,.8) 0%, rgba(16,66,157,.8) 0%, rgba(11,27,103,.8) 17.3%, rgba(11,27,103,.8) 58.8%, rgba(11,27,103,.8) 71.4%, rgba(16,66,157,.8) 100.2%, rgba(187,187,187,.8) 100.2% )",
        "linear-gradient( 109.6deg,  rgba(45,116,213,.8) 11.2%, rgba(121,137,212,.8) 91.2% )",
    ];
    //Este arreglo contiene el nombre de los archivos del fondo del body
    const imageNames = [
        "jagerwallp.png",
        "valkWal.jpg",
        "iqWall.jpg",
        "docWall.jpg",
        "lionWall.jpg",
        "tom-clancys-rainbow-six-siege-2019-4k-58.jpg",
        "banditWall.jpg",
        "aceWall.jpg",
        "twitchWall.jpg",
    ];
    // Este arreglo contiene el texto a modificar del html
    const opText=[
        "Jager es el seudónimo de Marius Streicher, un operador de defensa de origen alemán en Rainbow Six. Nació en Berlín, Alemania, el 9 de marzo de 1979, y se unió a la Bundeswehr después de la caída del Muro de Berlín. Marius se destacó como un soldado excepcional, y su experiencia en la guerra le llevó a convertirse en un experto en combate y en la defensa de puntos estratégicos. \n Marius desarrolló su habilidad especial de ADS (sistema de defensa activa) después de notar la necesidad de un dispositivo que pudiera interceptar y destruir granadas, proyectiles y otros objetos arrojados por el enemigo. Este dispositivo fue diseñado por él mismo y es ahora utilizado por el equipo Rainbow. \n En Rainbow Six, Jager es conocido por su habilidad especial de ADS, que le permite interceptar y destruir granadas, proyectiles y otros objetos arrojados por el enemigo. Además, su arma principal es un fusil de asalto muy potente, lo que le permite mantener una buena defensa en cualquier punto del mapa. \n A lo largo de su carrera en Rainbow Six, Jager ha sido un operador confiable y efectivo en situaciones de defensa. A pesar de su reputación como un hombre serio y reservado, es respetado por sus compañeros de equipo por su dedicación y profesionalismo en el campo de batalla.",
        "Valkyrie es el seudónimo de Meghan J. Castellano, una operadora de defensa de origen noruego en Rainbow Six. Nació en Bergen, Noruega, el 5 de junio de 1980, y se unió al Servicio de Inteligencia Militar Noruego (NIS) después de servir en la Fuerza de Defensa Nacional de Noruega.\n Meghan se destacó por su habilidad en la recolección de inteligencia y en la identificación de amenazas, lo que la llevó a desarrollar una habilidad especial de lanzar cámaras negras por el mapa. Esta habilidad fue diseñada por ella misma para ayudar a su equipo en la recolección de inteligencia y en la identificación de amenazas. \n En Rainbow Six, Valkyrie es conocida por su habilidad especial de lanzar cámaras negras por el mapa, lo que permite a su equipo monitorear la actividad enemiga desde diferentes ángulos. Además, su arma principal es una escopeta y una pistola con silenciador, lo que la hace efectiva en situaciones de defensa y en el sigilo. \n A lo largo de su carrera en Rainbow Six, Valkyrie ha sido una operadora valiosa y efectiva en situaciones de defensa y recolección de inteligencia. A pesar de su personalidad reservada, es respetada por sus compañeros de equipo por su dedicación y profesionalismo en el campo de batalla.",
        "IQ es el seudónimo de Monika Weiss, una operadora de ataque de origen alemán en Rainbow Six. Nació en Frankfurt, Alemania, el 14 de septiembre de 1981, y se unió a la Bundeswehr después de completar sus estudios en ingeniería eléctrica.\n Monika se destacó por su habilidad en el análisis de señales eléctricas y en la identificación de dispositivos electrónicos, lo que la llevó a desarrollar una habilidad especial de detectar dispositivos electrónicos enemigos. Esta habilidad le permite a ella y a su equipo identificar y destruir dispositivos enemigos ocultos, como cámaras, bombas y drones. \n En Rainbow Six, IQ es conocida por su habilidad especial de detectar dispositivos electrónicos enemigos, lo que la convierte en una experta en la eliminación de dispositivos electrónicos enemigos ocultos. Además, su arma principal es un fusil de asalto muy preciso, lo que la hace efectiva en situaciones de ataque a distancia. \n A lo largo de su carrera en Rainbow Six, IQ ha sido una operadora valiosa y efectiva en situaciones de ataque y eliminación de dispositivos electrónicos enemigos. A pesar de su personalidad seria y enfocada, es respetada por sus compañeros de equipo por su dedicación y profesionalismo en el campo de batalla.",
        "Doc es el seudónimo de Gustave Kateb, un operador de defensa de origen francés en Rainbow Six. Nació en Burdeos, Francia, el 22 de enero de 1977, y se unió a la Armée de Terre después de completar sus estudios en medicina.\nGustave se destacó por su habilidad en la medicina de combate y en la atención de emergencias, lo que lo llevó a desarrollar una habilidad especial de curar a sus compañeros de equipo a distancia utilizando un dispositivo de curación a distancia. Esta habilidad le permite a él y a su equipo mantenerse saludables durante un enfrentamiento, lo que puede ser la diferencia entre la vida y la muerte.\nEn Rainbow Six, Doc es conocido por su habilidad especial de curar a sus compañeros de equipo a distancia, lo que lo convierte en un valioso operador de defensa. Además, su arma principal es un rifle de francotirador y una pistola, lo que lo hace efectivo en situaciones de defensa a distancia y cercanas.\nA lo largo de su carrera en Rainbow Six, Doc ha sido una operadora valiosa y efectiva en situaciones de defensa y atención médica de emergencia. A pesar de su personalidad reservada y un poco sarcástica, es respetado por sus compañeros de equipo por su habilidad médica y su dedicación en el campo de batalla. ",
        "Lion es el seudónimo de Olivier Flament, un operador de ataque francés en Rainbow Six Siege. Nació en París, Francia, el 12 de septiembre de 1981. Antes de unirse a Rainbow Six, Lion sirvió en las Fuerzas Especiales francesas, donde se desempeñó como rastreador y experto en inteligencia. \nDurante su tiempo en las Fuerzas Especiales, Lion se especializó en la recolección de información en el campo de batalla. Después de varios años de servicio, comenzó a trabajar en el desarrollo de una nueva tecnología que pudiera ser utilizada por los operadores de Rainbow Six. Esta tecnología se convirtió en su habilidad especial, el dron de vigilancia EE-ONE-D.\n El dron de Lion es capaz de volar por encima del mapa y detectar a los enemigos en un área determinada. Una vez que se detecta a un enemigo, el dron emite un pulso que ralentiza al enemigo y revela su posición a los demás operadores. Esto permite que el equipo Rainbow tenga una ventaja táctica al saber dónde se encuentra el enemigo.\n Además de su habilidad especial, Lion lleva una variedad de armas, incluyendo el rifle de asalto V308 y la ametralladora ligera 6P41.\n En Rainbow Six, Lion es conocido por su enfoque estratégico y su capacidad para recopilar información. Aunque no es un operador de ataque en el sentido tradicional, su habilidad especial puede ser invaluable para el equipo Rainbow en situaciones tácticas. A pesar de su actitud reservada, Lion es muy respetado por sus compañeros de equipo por su experiencia en el campo de batalla y su dedicación a la seguridad nacional.",
        "Sledge es el seudónimo de Seamus Cowden, un operador de ataque británico en Rainbow Six Siege. Nació en Dumfries, Escocia, el 2 de julio de 1982.\n Antes de unirse a Rainbow Six, Sledge sirvió en las Fuerzas Especiales del Reino Unido, donde fue entrenado en el uso de explosivos y demolición. Se destacó por su fuerza física y su habilidad para manejar herramientas y maquinarias pesadas, lo que lo convirtió en un experto en demoler estructuras y barreras. \n En Rainbow Six, Sledge es conocido por su habilidad especial, el martillo táctico. Esta herramienta le permite a Sledge golpear y destruir paredes, puertas y pisos con gran facilidad, lo que puede ser extremadamente útil para abrir nuevas líneas de visión o crear puntos de entrada para el equipo. Además, Sledge lleva una selección de armas de fuego, incluyendo el rifle de asalto L85A2 y la escopeta de bombeo M590A1. \n Aunque es un operador muy efectivo, Sledge es conocido por su personalidad reservada y su falta de interacción social. Prefiere centrarse en la tarea que tiene entre manos y rara vez habla sobre su vida personal. Sin embargo, es extremadamente leal a sus compañeros de equipo y siempre está dispuesto a arriesgar su vida para protegerlos.",
        "Bandit es el seudónimo de Dominic Brunsmeier, un operador de defensa alemán en Rainbow Six Siege. Nació en Augsburgo, Alemania, el 13 de febrero de 1970. Antes de unirse a Rainbow Six, Bandit sirvió en la Bundeswehr como especialista en explosivos.\n Durante su tiempo en la Bundeswehr, Bandit se especializó en la creación y desactivación de explosivos. Después de varios años de servicio, se unió a un grupo privado de contratistas de seguridad, donde continuó trabajando con explosivos y otros dispositivos peligrosos.\n En Rainbow Six, Bandit es conocido por su habilidad especial, los dispositivos de choque, que pueden ser utilizados para electrificar barreras, paredes y alambradas. Estos dispositivos son capaces de dañar a los operadores enemigos que intenten destruir las barreras o paredes electrificadas. \n Además de sus habilidades especiales, Bandit lleva una variedad de armas, incluyendo el subfusil MP7 y la escopeta M870. \n Bandit es conocido por ser un operador versátil que puede defender varios puntos en el mapa. Es respetado por sus compañeros de equipo por su habilidad para proteger objetivos y desalentar a los enemigos de acercarse a ellos. A pesar de su personalidad tranquila, Bandit es un operador leal y comprometido que siempre está dispuesto a ayudar a su equipo.",
        "Ace es el seudónimo de Félix \"Ace\" Marquardt, un operador de asalto noruego en Rainbow Six Siege. Nació en Oslo, Noruega, el 2 de septiembre de 1991. Antes de unirse a Rainbow Six, Ace sirvió en la Brigada Nord, una unidad de operaciones especiales de Noruega.\n Durante su tiempo en la Brigada Nord, Ace se destacó por su habilidad en el manejo de explosivos y su capacidad para improvisar soluciones en situaciones de combate. También adquirió habilidades en el uso de drones de reconocimiento, que le permitieron recopilar información crítica sobre el terreno y los enemigos.\n En Rainbow Six, Ace es conocido por su habilidad especial, el SELMA, un dispositivo de carga explosiva que puede adherirse a superficies y destruirlas. El SELMA es especialmente útil para abrir nuevas rutas a través de paredes reforzadas o suelos. Ace también lleva un lanzagranadas M120 CREM, que puede destruir obstáculos y aturdir a los enemigos.\n Ace es un operador flexible que puede adaptarse a diferentes situaciones en el campo de batalla. Es respetado por sus compañeros de equipo por su habilidad para abrir nuevas rutas y flanquear al enemigo. Además, su experiencia en el uso de drones le permite proporcionar información valiosa a sus compañeros de equipo y planificar ataques más efectivos.",
        "Twitch es el seudónimo de Emmanuelle Pichon, una operadora de asalto francesa en Rainbow Six Siege. Nació en Nancy, Francia, el 12 de febrero de 1988, y antes de unirse a Rainbow Six, trabajó como ingeniera en el campo de la robótica. \nTwitch se especializó en el diseño y construcción de drones de reconocimiento y de combate, y sus habilidades en este campo le valieron la atención de Rainbow Six. En el equipo, Twitch es conocida por su habilidad especial, el drone Shock, que puede electrocutar y destruir dispositivos electrónicos enemigos, como cámaras, barricadas y trampas.\n Además del drone Shock, Twitch lleva una carabina F2 muy potente y una pistola automática que le permite lidiar con los enemigos a corta distancia. También tiene granadas de aturdimiento que pueden desorientar a los enemigos y dar a su equipo una ventaja táctica.\n  Twitch es una operadora astuta y táctica que utiliza su conocimiento de los drones para proporcionar información valiosa a su equipo. También es una excelente francotiradora, lo que la convierte en una amenaza tanto a larga como a corta distancia. A pesar de su naturaleza reservada, Twitch es leal a sus compañeros de equipo y siempre está dispuesta a ayudar en situaciones difíciles."
    ]
    // Este arreglo contiene los titulos a modificar del h1
    const titles = [
        "Jager",
        "Valkyrie",
        "IQ",
        "Doc",
        "Lion",
        "Sledge",
        "Bandit",
        "Ace",
        "Twitch"
    ]
    function changeColor(page) {
        if (page === 4 || page === 6 || page === 8 || page === 9) {
            changeToWhite();
        } else {
            changeToBlack();
        }
    }
    // El codigo de aca abajo se encarga de cambiar los divs de la pagina
    toChangeBg.style.background = backgrounds[page - 1];
    changeColor(page);
    document.body.style.background = `url(../media/imgs/${imageNames[page - 1]})`;
    document.body.style.transition = "background 1s ease-in-out"
    toChangeP.innerHTML = opText[page-1];
    toChangeH1.innerHTML = titles[page-1]
    fixAndSize();
    window.scroll(0, 0);
    //Para que el fondo no se haga raro
    function fixAndSize(){
        document.body.style.backgroundSize ="100%";
        document.body.style.backgroundAttachment = "fixed"
    }
    // Las 2 funciones de abajo cambian el color del h1 y p1 de la lista de operadores
    function changeToBlack(){
        toChangeP.style.color = "black";
        toChangeH1.style.color = "black";
    }

    function changeToWhite(){
        toChangeP.style.color = "white";
        toChangeH1.style.color = "white";
    }
}
// Funcion para que cuando clickees el logo te mande al inicio de la pagina
function goToStart(){
    window.location.reload();
}


// Funcion que manda a la pagina 2 en la pagina principal. funciona como un anchor tag
function toNu(){
    window.location.href = "page2.html"
}

//Aqui comienza el script para la pagina 2, talvez reutilize scripts pasados

const navToggle = document.querySelector(".toggle");
const ulActive = document.querySelector("ul.nu");
// Muestra el menu desplegable cuando la pantalla tiene el porcentaje deseado
navToggle.addEventListener("click", ()=>{
    console.log(ulActive)
     ulActive.classList.toggle("active");
    let toHide = document.querySelectorAll('.index');
    document.querySelector('.innerIndex').classList.toggle('hide')
    for (let i = 0; i < toHide.length; i++) {
        toHide.item(i).classList.toggle('hide')
    }

})

// Funcion que muestra la descripcion de cada caracteristica en el apartado principal de la pagina, tambien es el que cambia de pagina
function switchPagesNU(){
    console.log('hola')
    const navList = document.querySelectorAll(".switch");
    // Obtiene la informacion que tengan el dataset indicado
    for (let i = 0; i < navList.length; i++) {
        const switchTab = navList[i];
        switchTab.addEventListener("click", ()=>{
            let tab = parseInt(switchTab.dataset.tab);
            console.log(switchTab)
            switchPage(switchTab, tab)
        })
    }
    // El que cambia de informacion en la lista del apartado principal
    function switchPage(page, tab){
        const info = [
            "Nu metal incorporates elements of metal, punk, hip hop, and other genres. It often features heavy, downtuned guitars, hip hop-inspired beats, and rapped or shouted vocals. This fusion of different styles creates a sound that is distinct from other metal genres.",
            "Nu metal puts a strong emphasis on rhythm and groove. The music often features syncopated rhythms and unusual time signatures, which give it a distinctive, off-kilter feel.",
            "Nu metal lyrics often deal with issues such as alienation, depression, and anger. The lyrics are usually personal and emotional, which helps to connect with fans on a deeper level.",
            "Nu metal is known for its willingness to experiment with different sounds and styles. Bands in the genre often incorporate electronic elements, such as samples and loops, into their music, which gives it a more modern, industrial feel.",
            "Nu metal was popular in the mainstream in the late 1990s and early 2000s, which helped to bring metal to a wider audience. The genre's fusion of different styles and emotional lyrics appealed to fans who might not have been interested in traditional metal."
        ]
        document.querySelector(`[data-page="${tab}"]`).innerHTML = info[tab-1]
    }
    //Es el que obtiene que paginas pueden ser cambiadas y llama a la funcion para cambiar la pagina
    const navPage = document.querySelectorAll('[data-list]');
    for (let i = 0; i < navPage.length; i++) {
        const navPages = navPage[i]
        navPages.addEventListener('click', ()=>{
            const numPage = navPages.dataset.list
            console.log(numPage)
            switchContent(navPages,numPage)
        })
    }
    // Para cambiar de pagina y quitar la que estaba activa
    function switchContent(page,tab){
        const switcher = document.querySelector(`[data-content="${tab}"]`)
        const remove = document.querySelector('section.active')
        remove.classList.remove('active')
        switcher.classList.add('active')
    }
}
// Es el que cambia las paginas en la pagina nu (xd)
switchPagesNU();
// Estas 2 lineas de codigo crean un objeto de tipo Audio y un arreglo que contiene las canciones
var audio = new Audio();
const names = ['My own summer by Deftones','Evolution by Korn','Fighting my Self by Linkin Park', 'Break Stuff by Limp Bizkit','Obey by BMTH','Deer Dance by System of a Down']
const music = ["../media/audio/Deftones My Own Summer Official Music Video Warner Vault.mp3","../media/audio/Evolution.mp3","../media/audio/Fighting Myself Official Audio Linkin Park.mp3","../media/audio/Limp Bizkit Break Stuff Official Music Video.mp3","../media/audio/Obey.mp3","../media/audio/System Of A Down Deer Dance Official Audio.mp3"]
// Encargado de reproducir la cancion que toque
document.onkeydown = function (e){
    if(audio.paused){
        // Comprueba si el audio esta pausado, sino reproduce una cancion
        if(e.altKey && e.which === 80) {
            const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
            let pick = random(0,5);
            audio.src = music[pick]
            console.log(audio)
            console.log("hola")
            audio.play();
            alert(`Now reproducing: ${names[pick]}`)
        }
    }else {
        // Pausar y controlar volumen
        let curr = audio.volume;
        if (e.altKey && e.which === 78)
            audio.pause()
        else if (e.altKey && e.which === 49) {
            console.log('ola')
            if(curr < 0.1)
                alert('That\'s the lowest you can go')
            else
                audio.volume = curr - 0.1
        }else if(e.altKey && e.which === 48 ){
            if(curr >= 1)
                alert('You can\'t turn up the volume any more!')
            else
                audio.volume = curr + 0.1
        }
    }
}

// Es el que cambia el div de la banda que se muestra, casi lloro haciendo esta coas
window.onload = () =>{
    // Se comprueba que no haya algun elemento deployado ya para que no tire error
    if(document.querySelector('.deploy') === null){
        const bands = document.querySelectorAll('li.index')
        for (let i = 0; i < bands.length; i++) {
            let band = bands[i]

            band.addEventListener('click', () =>{
                let bandName = band.dataset.name;
                console.log(bandName)
                switchBand(band,bandName);
                console.log(band)
            })
        }
    }else{
        console.log("hola")
    }
/*Esta funcion de lo que se encarga es de cambiar el div de la banda que se muestra, tambien como cambiar el class del div activo por motivos
* esteticos puramente, ademas de que se ve mas organizado*/
    function switchBand(band, name) {
        let switcher = document.querySelector(`.${name}`);
        if(document.querySelector('.is-active') === null){
            band.classList.toggle('is-active')
            switcher.classList.toggle('deploy');
            switcher.classList.toggle('hide');
        }else{
            let removeL = document.querySelector('.is-active')
            let removeD = document.querySelector('.deploy');
            removeD.classList.add('hide')
            removeD.classList.remove('deploy')
            removeL.classList.remove('is-active')
            band.classList.toggle('is-active')
            switcher.classList.toggle('deploy');
            switcher.classList.toggle('hide');
        }
        console.log(switcher)
    }
}
/*Esto obtiene el id del h1 para que cuando se le de click recargue la pagina, una alternativa a tener que
* switchear de pagina a inicio mucho mas facil
* */
const reloadNU = document.getElementById('logo')
console.log(reloadNU.innerHTML)
// La funcion para que se recargue con click
reloadNU.addEventListener('click',()=>{
    location.reload();
})