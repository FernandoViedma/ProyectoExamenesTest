$(document).ready(function() {
    if(document.cookie.indexOf("sesion=profesor") == -1){
        window.location.href = "login.html";
    }else{
        volver();
        obtenerAlumnos();
    }
});

/**Se obtiene el nombre de la asignatura almacenado en Local Storage y se envia por ajax
al archivo php para que obtenga los alumnos de esa asignatura*/
function obtenerAlumnos(){
    var nombreAsignatura = localStorage.getItem('asignatura');
        $('<h1>'+ nombreAsignatura + '</h1>').appendTo('#titulo');
        var jsonNombreAsignatura = { "nombreAsignatura": nombreAsignatura};
        var request = $.ajax({
            url: "php/profesor/tablaAlumnos.php",
            type: "post",  
            dataType: 'json',
            data: jsonNombreAsignatura
        });

        //En caso de que la respuesta tenga éxito
        request.done((response, _textStatus, _jqXHR) => {
            console.log("done: ", response);
            var alumnos = response;
            //Con un for se recorre el array con los alumnos y se pinta un div con cada uno
            for(var i = 0; i < alumnos.length; i++){
                $('<tr class="mostrarAlumnos" name="' + alumnos[i].idusuario + '"><td><a  href="#">' + alumnos[i].nombre + ' ' + alumnos[i].apellidos + '</a></td></tr>').appendTo("#listaAlumnos");
            }

            /**Al hacer click sobre un alumnos se obtiene el id 
            y se almacena en Local Storage. También se redirige a el archivo html correspondiente. */
            $('.mostrarAlumnos').click(function(){
                var idusuario= $(this).attr("name");
                console.log("idusuario: " + idusuario);
                localStorage.setItem("idalumno", idusuario);
                location.href = "notasAlumno.html";   
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
        location.href = "menuMostrarResultados.html"; 
    })
}
