function moverPosicionRandom(elem){
    elem.style.position = 'absolute';
    elem.style.top = Math.random() * (window.innerHeight - elem.offsetHeight) + 'px';
    elem.style.left = Math.random() * (window.innerWidth - elem.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn-si")
let btnNo = document.getElementById("btn-no")
let divModoCristobalColon = document.getElementsByClassName("modo_cristobal_colon")[0]

btnNo.addEventListener('mouseenter', function(e) {moverPosicionRandom(e.target)})

btnSi.addEventListener('click', function(e){
    alert('Sabía que dirías que sí 😉🧡');

    divModoCristobalColon.style.display = 'block';
    const cancion = new Audio('img\\modo_hot.mp3');
    cancio.play();
});

