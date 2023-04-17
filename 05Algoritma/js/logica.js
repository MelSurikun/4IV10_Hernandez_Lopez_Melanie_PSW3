//problema 1
function problema1(){
    var ingresadas = document.getElementById("p1-input").value;
    var split = ingresadas.split(' ').reverse();
    var final = '';

    split.forEach(function (palabras, i){

        if(i != 0 || i != split.length) final += ' ';
        final += palabras;
    });
    document.querySelector('#p1-output').textContent = final;
}

function borrar1(){
    document.getElementById("p1-input").value = "";
    document.querySelector("#p1-output").textContent = "";
}


//problema 2
function problema2(){
    var x1 = document.querySelector('#p2-x1').value;
    var x2 = document.querySelector('#p2-x2').value;
    var x3 = document.querySelector('#p2-x3').value;
    var x4 = document.querySelector('#p2-x4').value;
    var x5 = document.querySelector('#p2-x5').value;

    var y1 = document.querySelector('#p2-y1').value;
    var y2 = document.querySelector('#p2-y2').value;
    var y3 = document.querySelector('#p2-y3').value;
    var y4 = document.querySelector('#p2-y4').value;
    var y5 = document.querySelector('#p2-y5').value;

    var vec_x = [x1, x2, x3, x4, x5];
    var vec_y = [y1, y2, y3, y4, y5];

    vec_x = vec_x.sort(function(vec_x,vec_y){
        return vec_y - vec_x;
    });

    vec_y = vec_y.sort(function(vec_x,vec_y){
        return vec_y - vec_x;
    });

    vec_y = vec_y.reverse();
    var resultado = 0;

    for(var i = 0; i < vec_x.length; i++){
        resultado += vec_x[i] * vec_y[i];
    }

    document.querySelector('#p2-output').textContent = 
    'El producto escalar minimo es de: ' + resultado;
}

function borrar2(){
    document.querySelector("#p2-output").textContent = "";
    document.getElementById("p2-x1").value = "";
    document.getElementById("p2-x2").value = "";
    document.getElementById("p2-x3").value = "";
    document.getElementById("p2-x4").value = "";
    document.getElementById("p2-x5").value = "";

    document.getElementById("p2-y1").value = "";
    document.getElementById("p2-y2").value = "";
    document.getElementById("p2-y3").value = "";
    document.getElementById("p2-y4").value = "";
    document.getElementById("p2-y5").value = "";
}

//problema 3
function problema3(){

    //primero necesitamos definir un alfabeto

    var alfabeto = ['A', 'B', 'C', 'D', 'E', 'F','G', 
                    'H', 'I', 'J', 'K', 'L', 'M', 'N',
                    'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T',
                    'U', 'V', 'W', 'X', 'Y', 'Z'];

    //VAMOS A OBTENER LA ENTRADA DE LOS DATOS
    var p3_input = document.querySelector('#p3-input').value;

    //lo que necesitamos es separar todo por comas
    var p3_palabras = p3_input.split(',');

    //necesitamos una funcion que se encargue de recuperar cada palabra
    //tengo que eliminar los espacios

    p3_palabras = p3_palabras.map(function(palabras){
        return palabras.replace(/\s/g, '').toUpperCase();
    });

    //hay que calcular los caracteres unicos
    var p3_res = '';

    //una funcion que se encargue de calcular que contienen el arreglo y separar
    //cada caracter y contarlo

    p3_palabras.forEach(function(palabra, i){

        var letras_unicas = [];
        var palabra_array = palabra.split('');

        //debo iterar el alfabeto
        alfabeto.forEach(function(letra, j){
            //itero cada palabra
            palabra_array.forEach(function(letras_palabras, k){
                //comprobar que la letra este dentro del alfabeto
                if(letras_palabras == letra){
                    //si la letra no la hemos contado la agregamos
                    //a un array para contar las letras unicas
                    if(letras_unicas.indexOf(letra)<0 ){
                        letras_unicas.push(letra);
                    }
                }
            });
        });
        //CONTAMOS LA SALIDA
        p3_res += 'Palabras: ' + palabra + '=' + letras_unicas.length + ' \n';
    });
    //IMPRIMIMOS LA SALIDA
    document.querySelector('#p3-output').textContent = p3_res;
}

function borrar3(){
    document.getElementById("p3-input").value = "";
    document.querySelector("#p3-output").textContent = "";
}
