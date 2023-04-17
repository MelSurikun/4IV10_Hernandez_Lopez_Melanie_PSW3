//creamos una constante que hará referencia a la clase "hoyo"
const hoyos = document.querySelectorAll('.hoyo'),

//creamos una constante que hará referencia a la clase ".score"
puntuacion = document.querySelector('.score'),

//creamos una constante que hará referencia a la clase "chayanne"
cchayanne = document.querySelectorAll('.chayanne');

let ultimoHoyo, inicioTiempo= false, score= 0;

//creamos funciones para que chayanne aparezca en hoyos aleatorios en diferentes tiempos
function tiempoAleatorio(min, max){
    return Math.round(Math.random() * (max - min) + min);
}

function hoyoAleatorio(hoyos){
    const idx = Math.floor(Math.random() * hoyos.length),
    hoyo = hoyos[idx];

    if(hoyo == ultimoHoyo){
        return hoyoAleatorio(hoyos);
    }

    ultimoHoyo = hoyo;
    return hoyo;
}

function chayanneAparezcaAlea(){
    const tiempo = tiempoAleatorio(400, 1000), 
    hoyo = hoyoAleatorio(hoyos);

    hoyo.classList.add('inicio');
        setTimeout(()=>{
            hoyo.classList.remove('inicio');
            if(!inicioTiempo)
                chayanneAparezcaAlea();
        }, tiempo);
}

//creamos funcion para al hacer click en iniciar, se inicie el juego
function iniciaJuego(){
    puntuacion.textContent = 0;
    inicioTiempo = false;
    score = 0;

    chayanneAparezcaAlea();
        setTimeout(()=> inicioTiempo = true, 60000);
        alert("¿Listo? El juego comienza ahora :D");
        desapareceIniciar();
}

//creamos funcion para contar en el score los clicks en el chayanne chiquito
function subeScore(e){
    if(!e.isTrusted) return;

    this.parentElement.classList.remove('inicio');
    //hace que no haga más de un click en el mismo
    if(!this.classList.contains('chayanneAtrapado')){
        score++;

        puntuacion.textContent = score;
    }
    this.classList.add('chayanneAtrapado');
}

//creamos funcion que chayanne aparecido, desaparezca
function chayanneAbajo(){
    this.classList.remove('chayanneAtrapado');
}

//cada vez que haga click, puntuacion sube (subeScore) cchayanne nom del array
cchayanne.forEach(chayanne => chayanne.addEventListener('click', subeScore));

//si acaba la transicion, entonces el chayanne desaparece
cchayanne.forEach(chayanne => chayanne.addEventListener('transitionend', chayanneAbajo));


window.onload=tempo;

function tempo(){

    m = 1;
    s = 60;
    document.getElementById("ms").innerHTML="01:00";

}

function temporizar(){
  iniciar();
  id = setInterval(iniciar,1000);
}

function iniciar(){
  
   var  mAux, sAux;
    s--;
  if(m>0){m--}
  if (s<10){sAux="0"+s;}
  if(m<1){sAux= s}
  if(m<1){mAux= m}
if(s==0){mAux=0; sAux=0;
        stop();}

    
   document.getElementById("ms").innerHTML = "0" + mAux + ":" + sAux; 
}

function stop(){
    document.getElementById('ms').style.display = 'none';
   }

function desapareceIniciar(){
    document.getElementById('ini').style.display = 'none'; 
}   

function llamar() {
    iniciaJuego();
    temporizar();
}

const reload = document.getElementById('reload');

reload.addEventListener('click', _ => { // el _ es para indicar la ausencia de parametros
    location.reload();
});