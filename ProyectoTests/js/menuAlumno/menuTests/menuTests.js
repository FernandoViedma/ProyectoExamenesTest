$(document).ready(function() {
    if(document.cookie.indexOf("sesion=alumno") == -1){
        window.location.href = "login.html";
    }else{
        volver();
        volver1();
        mostrarTests();
    }
});

function mostrarTests(){
    /** Se obtiene el nombre de la asignatura almacenado en Local Storage y se envia por ajax
    al archivo php para que obtenga los tests de esa asignatura */
    var nombreAsignatura = localStorage.getItem('asignatura');
        $('<h1>'+ nombreAsignatura + '</h1>').appendTo('#titulo');
        var jsonNombreAsignatura = {"nombreAsignatura": nombreAsignatura};
        var request = $.ajax({
            url: "php/alumno/Tests/tests.php",
            type: "post",  
            dataType: 'json',
            data: jsonNombreAsignatura
        });

        /** En caso de que la respuesta tenga éxito */
        request.done((response, _textStatus, _jqXHR) => {
            console.log("done: ", response);
            var tests = response;
            /** Con un for se recorre el array con los tests y se pinta un div con cada uno */
            for(var i = 0; i < tests.length; i++){
                $('<div id="mostrarTests"><a id="p' + i + '" href="#" name="'
                + tests[i].nombretest + '" class="mostrarTests"><span class="nav-label" title="'
                + tests[i].nombretest + '"> ' + tests[i].nombretest +
                '</span></a></div>').appendTo("#tests");
            }

            /** Al hacer click sobre una asignatura se obtiene el nombre del test 
            y se almacena en Local Storage. También se redirige a el archivo html correspondiente. */
            $('.mostrarTests').click(function(){
                var guardarNombreTest= $(this).attr("name");
                localStorage.setItem('test', guardarNombreTest); 
                location.href = "Preguntas.html";   
            });    

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
        location.href = "menuAlumno.html"; 
    })
}

function volver1(){
    $('#volver1').click(function(){
        location.href = "menuProfesor.html"; 
    })
}