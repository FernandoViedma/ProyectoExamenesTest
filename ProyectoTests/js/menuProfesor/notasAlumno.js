$(document).ready(function() {
    if(document.cookie.indexOf("sesion=profesor") == -1){
        window.location.href = "login.html";
    }else{
        volver();
        obtenerNotasAlumno();
    }
});

function obtenerNotasAlumno(){
        /**se obtienen del local storage la asignatura y el id del alumno y se envian por ajax
        para obtener las notas*/
        var nombreAsignatura = localStorage.getItem('asignatura');
        var idalumno = localStorage.getItem('idalumno');
        $('<h1>'+ nombreAsignatura + '</h1>').appendTo('#titulo');
        var jsonAlumnoAsignatura = { "nombreAsignatura": nombreAsignatura, "idAlumno": idalumno };
        var request = $.ajax({
            url: "php/profesor/notasAlumno.php",
            type: "post",  
            dataType: 'json',
            data: jsonAlumnoAsignatura
        });

        request.done((response, _textStatus, _jqXHR) => {
            console.log("done: ", response);
            var notas = response;
            //con las notas obtenidas se pinta la tabla
            for(var i = 0; i < notas.length; i++){
                 $('<tr ><td>' + notas[i].nombretest + '</td><td>' + notas[i].nota + '</td></tr>').appendTo("#notasAlumno");
            }
            //Se crea otra función para los test que no se hayan realizado.
            testSinNotas(notas);
               
        });
        request.fail((response, textStatus, errorThrown) => {
            console.log("fail: ", response);
            console.log("textStatus: ", textStatus);
            console.log("errorThrown: ", errorThrown);
            alert('Error')
        });
}

function testSinNotas(notas){
    /**Se obtiene del local storage la asignatura y se manda por ajax para obtener todos los test */
    var asignatura = localStorage.getItem('asignatura');
    var jsonAsignatura = {"asignatura": asignatura};
    var request = $.ajax({
        url: "php/profesor/testDisponibles.php",
        type: "post",
        dataType: 'json',
        data: jsonAsignatura
    });

    request.done((response, _textStatus, _jqXHR) => {
        console.log("done: ", response);
        
        var testsAsignatura = [];
        var arrayTestRealizados = [];
        //Se guardan en un array los nombres de los tests de la asignatura
        for (i = 0; i < response.length; i++){
            testsAsignatura.push(response[i].nombretest);
        }
        //se guardan en otro array los tests realizados por el alumno
        for (z = 0; z < notas.length; z++){
            arrayTestRealizados.push(notas[z].nombretest);
        }
        console.log(testsAsignatura);
        console.log(arrayTestRealizados);

        var arrayTestDisponibles = [];

        /**se recorre el array con los test de las asignaturas, y con indexOf se comprueban los test
        que le quedan por realizar al alumno*/
        for(i = 0; i < testsAsignatura.length; i++){
            console.log(testsAsignatura[i]);
            var element = testsAsignatura[i];
            var ids = arrayTestRealizados.indexOf(element);
            console.log(ids);
            if(ids == -1){
                arrayTestDisponibles.push(testsAsignatura[i]);    
            }
        }

        //se pintan en la tabla los test que no tienen nota
        for(var i = 0; i < arrayTestDisponibles.length; i++){
            $('<tr ><td>' + arrayTestDisponibles[i] + '</td><td>-</td></tr>').appendTo("#notasAlumno");
        }
        console.log(arrayTestDisponibles);
        
    });
    request.fail((response, textStatus, errorThrown) => {
        console.log("fail: ", response);
        console.log("textStatus: ", textStatus);
        console.log("errorThrown: ", errorThrown);
        alert('Error')
    });
}

function volver(){
    $('#volver').click(function(){
        location.href = "tablaAlumnos.html"; 
    })
}