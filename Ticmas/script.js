document.addEventListener('DOMContentLoaded', ()=>{

    const $nav = document.querySelector('[role="main_menu"]');
    const $burgerIcon = $nav.querySelector('[role="main_menu_burger_icon"]');
    const $burgerMenu = $nav.querySelector('ul');
    const $items = $burgerMenu.querySelectorAll('li > a');


    $burgerIcon.addEventListener('click', event =>{
        $burgerMenu.classList.toggle('mostrar');
    });

    $items.forEach(($item)=>{
        console.log($item);
        $item.addEventListener('click', function (event) {
            // impide que funcione el hipervínculo
            //event.preventDefault();
            $burgerMenu.classList.toggle('mostrar');
            const targetId = event.target.dataset.target;
            document.querySelector(targetId).classList.toggle('resaltar_titulo');
            console.log(event.target.dataset.target);
        });    
    });

});