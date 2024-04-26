//Sitio web de una pagina
// 30 segundos para responder 5 preguntas
// si falla: alert('game over') + Boton 'Reiniciar'
// si lo logra: alert('fecha & respuestas') + Boton 'Listo'

// DEBE CONTENER
// una cuenta regresiva de 30 a 0 segundos
// 5 preguntas
// 5 inputs
// boton 'listo' o 'enviar'
// boton 'reiniciar'

//FUNCIONES
//mostrar tiempo inicial y llamar a funciones 2 y 3
// codigo para tiempo cumplido
// actualizar tiempo en pantalla
// mostrar alert con fecha & respuestas
// reiniciar sitio

//para usar 'reiniciar' se debe usar 'location' con el metodo 'reload()'
//ejemplo: location.reload()

//Formato dd/mm/aaaa
// let miFecha = new Date()
// miFecha.toLocalDateString('es-Es')


//-------------------------Mi Código---------------------------------------------------------->
// ------------------------mis variables-------------------------------------------------------------------->
// let elementoTextoAlarma = document.getElementById( "textoAlarma" );
// let elementoHoraDia = document.getElementById('horaDia');
// let elementoSegundos = document.getElementById( "tiempoEnMarcha" );
// let elementoCuentaRegresiva = document.getElementById( "cuentaRegresivaSpan" );
// let elementoAudioAlarma = document.getElementById( "audioAlarma" );
// let elementoActivarCuestionario = document.getElementById('cuestionarioActivado')
// let elementoFecha = document.getElementById('fecha')
// -------------------------------------------------------------------------------------->
let tiempoTerminado
let intervaloDeTiempo
let elementoAudioFinal = document.getElementById("audioFinal")
let elementoCuentaRegresiva = document.getElementById('cuentaRegresiva')

function comenzarCuentaRegresiva(){//Aqui inicia el conteo regresivo del cuestionario------>
  tiempoTerminado = setTimeout(tiempoCumplido, 30000);//función que debe restarse cuando se inicia el conteo regresivo---->
  intervaloDeTiempo = setInterval(ticTac, 1000)//Intervalo de tiempo (segundos) de cada cuantos segundos se repite el contador 1000 segundos == 1 segundo

  elementoCuentaRegresiva.textContent = 30// aquí inicia el conteo regresivo en 30 segundos
}
function tiempoCumplido(){//aquí sucede lo que viene despues de los 30 segundos de tiempo
  clearInterval(intervaloDeTiempo)//aquí se reinicia el tiempo una vez cumplidos los 30 segundos
  elementoCuentaRegresiva.textContent = 0//aqui se vuelve a iniciar de 0 el contador

  elementoAudioFinal.play();//Comienza el sonido del GAME OVER al terminar el tiempo
  alert('GAME OVER: Se término el tiempo. Intentalo de nuevo¡')
  // let tiempoActual = new Date();
  // let hora = tiempoActual.getHours();
  // let minutos = tiempoActual.getMinutes();
  // let segundos = tiempoActual.getSeconds();
  // elementoCuentaRegresiva.textContent = "Ha iniciado el cuestionario";
  elementoAudioFinal.style.color = 'green';
  // elementoAudioAlarma.play();
  // elementoHoraDia.textContent = hora + ':' + minutos + ':' + segundos;
  // elementoTiempoRestante.textContent = minutos + ':' + segundos;
  // elementoTiempoRestante.style.color = 'red';
  // elementoFecha.textContent = 'DD/MM/AAAA';
}

//------------------------------------------------------------------------------------>
// function iniciarReloj(){
    // setInterval(ticTac, 1000)
// }
//------------------------------------------------------------------------------------>

function ticTac(){//Controla el tiempo (reloj)
    let tiempo = elementoCuentaRegresiva.textContent//Toma el contenido de la cuentaRegresiva

    elementoCuentaRegresiva.textContent= tiempo -1//Descuenta 1 número por segundo (hasta cumplirse los 30 segundos que tiene de tiempo limite la funcion)

//---------------------------------------------------------------------------------------------------->
    // let tiempoActual = new Date()
    // let hora = tiempoActual.getHours()
    // let minutos = String(tiempoActual.getMinutes()).padStart(2,'0')
    // let segundos = String(tiempoActual.getSeconds()).padStart(2, '0')//Aqui agregamos un cero mas al contador de segundos

    //ya que sin el padStart(2, '0') solo se vería un digito.
    //(2, '0') el 2 es por los digitos en el segundero, y el string  '0' para que inicie desde cero

    // let textoHora = hora + ':' + minutos + ':' + segundos
    // elementoHoraDia.textContent = textoHora

    // let tiempoRestante = minutos + ':' + segundos;
    // elementoTiempoRestante.textContent = tiempoRestante

    // let miFecha = new Date()
    // elementoFecha.textContent = String(miFecha.toLocaleDateString('es-Es'))
//----------------------------------------------------------------------------------------------------->
}

function finalizado(){
  clearTimeout(tiempoTerminado)//reinicia el tiempo limite del cuestionario (una vez terminados los 30 segundos vuelve a cero)
  clearInterval(intervaloDeTiempo)//reinicia el intervalo de los 30 segundos

  let fecha = new Date()//Aparece la fecha en que el usuario terminó el cuestionario
  let respuesta1 = document.getElementById('respuesta_uno').value//aqui se capturan las respuestas del usuario
  let respuesta2 = document.getElementById('respuesta_dos').value
  let respuesta3 = document.getElementById('respuesta_tres').value
  let respuesta4 = document.getElementById('respuesta_cuatro').value
  let respuesta5 = document.getElementById('respuesta_cinco').value

  let mensaje = fecha.toLocaleDateString('es-Es') + '\n' +//aquí va la fecha del intento del cuestionario al terminar el tiempo o terminar las preguntas
                    '1. ' + respuesta1 + '\n' + //aqui van las respuestas correctas de cada pregunta
                    '1. ' + respuesta2 + '\n' + //la '\n' es para darle saltos de linea a cada una de las preguntas
                    '1. ' + respuesta3 + '\n' +
                    '1. ' + respuesta4 + '\n' +
                    '1. ' + respuesta5 //aqui ya no termina la linea en '+ '\n' +' porque ya no hay mas preguntas y se cierra el cuestionario
                    alert(mensaje)//Con la variable 'mensaje' en 'alert' apareceran las respuestas y la fecha al dar click en 'boton finalizar'
}






//------------------------------------------------------------------------->
//Función para conteo regresivo (aportado por el nigger)
// function conteoRegresivo() {
    // elementoTiempoRestante = document.getElementById('tiempoRestante')

    // let tiempoRestante = 30000; // 5 minutos en milisegundos
    // const intervalo = 1000; // Intervalo de actualización (1 segundo)

    // const contador = setInterval(function() {
      // Calcula minutos y segundos restantes
    // let minutos = Math.floor(tiempoRestante / 600000);
    // let segundos = ((tiempoRestante % 600000) / 1000).toFixed(0);
    // if(segundos == 30 || minutos == 0){
      // elementoTiempoRestante.innerHTML = `${minutos}:${segundos}`;
      // alert("¡Acción!");
    // } else{
      //clearTimeout(contador)
      // clearInterval(contador);
      // }

      // Formatea el tiempo restante
    // let tiempoFormateado = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;

    // elementoTiempoRestante.textContent = tiempoFormateado

      // Muestra el tiempo restante
    // console.log(tiempoFormateado);

      // Reduce el tiempo restante
    // tiempoRestante -= intervalo;

      // Si el tiempo llega a cero, detén el contador
    // if (tiempoRestante < 0) {
        // clearInterval(contador);
        // console.log("¡Tiempo terminado!");
    // }
    // }, intervalo);
// }

  // Llama a la función para iniciar el conteo regresivo
// conteoRegresivo()
//------------------------------------------------------------------------------->
function reiniciarCuestionario(){//Esta funcion reinicia el cuestionario
    window.location.reload();//Toma toda la imagen visible de la pagina para reiniciar el cuestionario y el conteo
}
