function moverPosicionRandom(elem) {
    elem.style.position = 'absolute';
    elem.style.top = Math.random() * (window.innerHeight - elem.offsetHeight) + 'px';
    elem.style.left = Math.random() * (window.innerWidth - elem.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn-si");
let btnNo = document.getElementById("btn-no");
let divConquistador = document.getElementsByClassName("modo_conquistador")[0];

btnNo.addEventListener('mouseenter', function(e) {moverPosicionRandom(e.target) });

btnSi.addEventListener('click', function(e) {
    alert('Sabía que dirías que sí 😉❤️');
    divConquistador.style.display = 'block';
    const cancion = new Audio('img\\modo_hot.mp3');
    cancion.play();
});


/*
divConquistador.addEventListener('click', function(e){
    const img = document.createElement("img");
    img.src = "https://i.pinimg.com/474x/1d/c1/4b/1dc14b53f5b37a449449bbfa01b6c128.jpg";
    divConquistador.appendChild(img);
});


botones = document.getElementsByTagName("button");
console.log(botones[0]);


window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = "";
});

*/