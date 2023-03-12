window.onload = () =>{
    const tab_switchers = document.querySelectorAll('[data-switcher]'); //Esta constante hace uso del querySelectorAll en el data-switcher para obtener todos los elementos que tengan este atributo

    for(let i=0; i< tab_switchers.length ; i++){
        const tab_switcher = tab_switchers[i]; //Iteracion basica de arreglo
        const page_id = tab_switcher.dataset.tab; //Esta constante obtiene el numero de la pagina indicada por el tipo 'dataset' seguido del nombre que en este caso es tab.

        tab_switcher.addEventListener('click', ()=>{ //Event listener que se activa en click con una funcion de flecha
            document.querySelector('.menu .index .tab.is-active').classList.remove('is-active'); //Cuando se hace click en el nuevo tab se remueve el 'is-active' del tab anterior
            tab_switcher.parentNode.classList.add('is-active'); //Se agrega el 'is-active' al li que clickeemos
            console.log(page_id)
            switchPage(page_id)
        })
    }
}

function switchPage (page_id){
    const current_page = document.querySelector('.pages .page.is-active');
    //if(page_id === 1)
    current_page.classList.remove('is-active');

    const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);//Este query selector busca si el data-page es igual al id que seleccionamos
    next_page.classList.add('is-active');
}