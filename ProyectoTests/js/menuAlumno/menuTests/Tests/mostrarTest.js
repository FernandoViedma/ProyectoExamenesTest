$(document).ready(function() {
    if(document.cookie.indexOf("sesion=alumno") == -1){
        window.location.href = "login.html";
    }else{
        volver2();
        obtenerIDTest();
    }    
});

function obtenerIDTest(){
    /** Se obtiene el nombre del test del local storage
    Se envia por ajax al archivo php para hacer una consulta y obtener el id del test */
        var nombreTest = localStorage.getItem('test');
        var jsonDatos = { "nombreTest": nombreTest};
        var request = $.ajax({
            url: "php/alumno/Tests/obtenerDatos.php",
            type: "post",  
            dataType: 'json',
            data: jsonDatos
        });

        request.done((response, _textStatus, _jqXHR) => {
            console.log("done: ", response);
            var idTest = response.idTest;
            localStorage.setItem('idtest', idTest);
            //Se comprueba si el examen ya se ha realizado o no.
            comprobarDisponibilidad(idTest);
        });

        request.fail((response, textStatus, errorThrown) => {
            console.log("fail: ", response);
            console.log("textStatus: ", textStatus);
            console.log("errorThrown: ", errorThrown);
            alert('Error');
        });
}

/**Para comprobar si el examen se ha realizado ya por parte del alumno se envia el id test y el id del usuario
por ajax para hacer una consulta en la base de datos y ver si ya hay un resultado
guardado. */
function comprobarDisponibilidad(idTest){
    var idUsuario = localStorage.getItem('usuario');
    var jsonID = {"idTest": idTest, "idAlumno": idUsuario}
    var request = $.ajax({
        url: "php/alumno/Tests/disponibilidad.php",
        type: "post",  
        dataType: 'json',
        data: jsonID
    });

    request.done((response, _textStatus, _jqXHR) => {
        console.log("done: ", response);
        if(!response.error){
            /** si ya se ha realizado el examen sale un alert y redirecciona al menú anterior */
            alert("Ya has realizado este test");
            window.location.href = "menuTests.html";
        }else{
            /** si no hay resultados se procede a pintar el examen */
            obtenerExamen();
        }
    });

    request.fail((response, textStatus, errorThrown) => {
        console.log("fail: ", response);
        console.log("textStatus: ", textStatus);
        console.log("errorThrown: ", errorThrown);
        alert('Error');
    });
}

function obtenerExamen(){
    var soluciones = [];
    var longitudArray;
    /** Se obtiene el nombre del test del Local Storage y se guarda en un json. */
    var nombreTest = localStorage.getItem('test');
    var jsonNombreTest = { "nombreTest": nombreTest };
    /** Se envia al php el json con el nombre del test para que obtenga las preguntas y las soluciones de ese test */
    var request = $.ajax({
        url: "php/alumno/Tests/mostrarTest.php",
        type: "post",  
        dataType: 'json',
        data: jsonNombreTest
    });

    request.done((response, _textStatus, _jqXHR) => {
        $('<h1>'+ nombreTest + '</h1>').appendTo('#titulo');
        var test = response;
        /** Guardamos el número de preguntas del test en una variable */
        longitudArray = response.length;
        /**Se recorre el array y se llama a las funciones para pintar las preguntas y las opciones
        También se guarda en otro array la opción correcta de cada pregunta. */
        for(var i = 0; i < test.length; i++){
            mostrarPreguntas(i,test);
            mostrarOpciones(i,test);
            soluciones.push(response[i].solucion);
        }  
        console.log("soluciones" + soluciones);
        /** Se llama a las funciones de pintar el botón para corregir y la función para obtener
        las respuestas del alumno. */
        pintarBotonComprobar();
        obtenerRespuestasAlumno(longitudArray, soluciones); 
        
    });
    request.fail((response, textStatus, errorThrown) => {
        console.log("fail: ", response);
        console.log("textStatus: ", textStatus);
        console.log("errorThrown: ", errorThrown);
        alert('Error')
    });
}

/** Función para pintar las preguntas recorriendo el array obtenido mediante la llamada Ajax
En casa de tener imagen genera otro div */
function mostrarPreguntas(i,test){
    $(`<div id="preguntasDiv"></div>`).appendTo('#test');
    $('<br><br><form id="preguntas' + i + '" class="opciones"><h1 align="center" class="preguntas">' + test[i].pregunta + '</h1></form><br>').appendTo('#preguntasDiv');
    if (test[i].image != "") {
        $(`<div align="center" id="imgdiv`+ i +`"></div>`).appendTo('#preguntas' + i +'');
        $(`<img src='` + test[i].image + `'/>`).appendTo('#imgdiv' + i +'');
    }
}

/** Función para mostrar las opciones
Se utiliza el split para separar las opciones por cada "|". */
function mostrarOpciones(i,test){
    splitOpciones = test[i].opciones.split("|");
    for (var x = 0; x < splitOpciones.length; x++) {
        $('<label id="res' + x + '"><input type="radio" name="ask" value=" ' + splitOpciones[x] + ' ">' + splitOpciones[x] + '</label> </br>').appendTo('#preguntas' + i +'');
    }
}

/** Función para pintar el botón de corregir */
function pintarBotonComprobar() {
    $('<div align="center"><input id="comprobar" type="submit" value="Comprobar" class="btn btn-danger"</div><br><br>').appendTo('#preguntasDiv');
}

/** Función para obtener las respuestas del Alumno */
function obtenerRespuestasAlumno(longitudArray, soluciones){
    /** Al hacer click sobre el botón de comprobar */
    $( "#comprobar" ).click(function() {
        var respuestasAlumno = [];
        var preguntasAcertadas = 0;
        var preguntasFalladas = 0;
        var casillasVacias = false;
        /** El valor de la variable longitudArray corresponde al número de preguntas del test
        De esta manera mediante un for se pueden recorrer todos los inputs del test usando la id.*/
        for( i = 0; i < longitudArray; i++){
            /** si el input esta marcado se obtiene su valor y se guarda en el array respuestasAlumno */
            if($('input[name=ask]', '#preguntas' + i + '').is(':checked')){
                respuestasAlumno.push($('input[name=ask]:checked', '#preguntas' + i + '').val().trim());
            /** Si el input no esta marcados salta un alert y se sale del bucle. */
            }else{
                alert("Faltan preguntas por responder");
                var casillasVacias = true;
                break;
            }
        }
        /** Si se han marcado todas las respuestas, se comparan las respuestas del alumno 
        con las soluciones */
        if(casillasVacias == false){
            console.log("res: " + respuestasAlumno);
            for(x = 0; x < respuestasAlumno.length; x++){
                console.log(respuestasAlumno);
                for( x = 0; x < soluciones.length; x++){
                    if(respuestasAlumno[x] == soluciones[x]){
                        preguntasAcertadas++;
                    }else{
                        preguntasFalladas++;
                    }
                }
                console.log("Aciertos: " + preguntasAcertadas);
                console.log("Fallos: " + preguntasFalladas);
                calcularNota(preguntasAcertadas, longitudArray);
            }
            $("#preguntasDiv").hide();
            printarResultados();
            guardarDatos();
        }
    });
}

/**Con los aciertos y el número de preguntas se hace una regla de 3 para calcular la nota sobre 10
Con toFixed() se redondea, en este caso a dos decimales*/
function calcularNota(preguntasAcertadas, longitudArray){
    var nota;
    nota = (preguntasAcertadas * 10 / longitudArray);
    var notaRedondeada = nota.toFixed(2);
    localStorage.setItem('nota', notaRedondeada);
    console.log(notaRedondeada);
}

/**Funcion para guardar los resultados en la base de datos*/
function guardarDatos(){
    var notaAlumno = localStorage.getItem('nota');
    var idTestRealizado = localStorage.getItem('idtest');
    var idUsuarioTest = localStorage.getItem('usuario');
    var jsonResultados = { "idTest": idTestRealizado, "idAlumno": idUsuarioTest, "notaAlumno": notaAlumno};
    console.log("json", jsonResultados);
    var request = $.ajax({
        url: "php/alumno/Tests/resultados.php",
        type: "post",  
        dataType: 'json',
        data: jsonResultados
    });

    request.done((response, _textStatus, _jqXHR) => {
        console.log("done: ", response);   
    });

    request.fail((response, textStatus, errorThrown) => {
        console.log("fail: ", response);
        console.log("textStatus: ", textStatus);
        console.log("errorThrown: ", errorThrown);
        alert('Error');
    });
}

function printarResultados(){
    var notaStorage = localStorage.getItem('nota');
    $('<br><div align="center"><h2>Nota obtenida en el test:<br>' + notaStorage + '/10</h2></div><br><br><button class="btn btn-info" onclick="volver();">Volver al menú de test</button>').appendTo('#test');
}

function volver(){
    window.location.href = "menuTests.html";
}

function volver2(){
    $('#volver').click(function(){
        location.href = "menuTests.html"; 
    });
}

