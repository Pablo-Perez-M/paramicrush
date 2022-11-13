function moverPosicionRandom(elem) {
    elem.style.position = 'absolute';
    elem.style.top = Math.random() * (window.innerHeight - elem.offsetHeight) + 'px';
    elem.style.left = Math.random() * (window.innerWidth - elem.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn-si");
let btnNo = document.getElementById("btn-no");
let divConquistador = document.getElementsByClassName("modo_conquistador")[0]
let divVideo = document.getElementsByClassName("video");

btnNo.addEventListener('mouseenter', function(e) {moverPosicionRandom(e.target)})

btnSi.addEventListener('click', function(e) {
    alert('Sabía que dirías que sí 😉❤️');
    divVideo.style.display = 'none';

    divConquistador.style.display = 'block';
    const cancion = new Audio('img\\modo_hot.mp3');
    cancion.play();
});

