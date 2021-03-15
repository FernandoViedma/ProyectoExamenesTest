$(document).ready(function() {
    if(document.cookie.indexOf("sesion=administrador") == -1){
        window.location.href = "login.html";
    }else{
        volver();
        $("#eliminar").click(function() {
            /**se comprueba que los campos esten llenos*/
            if($('#usuario').val().length == 0 || $('#asignaturas').val().length == 0){
                alert("Faltan campos por rellenar");
            }else{
                var nuevoUsuarioAsignatura = { "idusuario": $('#usuario').val(), "nombreasginatura": $('#asignaturas').val() };
                console.log(nuevoUsuarioAsignatura);
                obtenerIdAsignatura(nuevoUsuarioAsignatura);
            }
        });
    }
});

/**Se obtiene el id de la asignatura a traves del nombre de la asignatura*/
function obtenerIdAsignatura(nuevoUsuarioAsignatura){
    var nombreAsignatura = {"nombreasignatura": nuevoUsuarioAsignatura.nombreasginatura};
    console.log(nombreAsignatura);
    var request = $.ajax({
            url: "php/administrador/obtenerIdAsignatura.php",
            type: "post",  
            dataType: 'json',
            data: nombreAsignatura
            
        });
        //En caso de que la respuesta tenga éxito
        request.done((response, _textStatus, _jqXHR) => {
            console.log("done: ", response);
            //Si existen datos correspondientes
            if(!response.error){
                var idAsignatura = response;
                eliminarAlumnoAsignatura(nuevoUsuarioAsignatura, idAsignatura);
            //Si no existen esos datos
            }else{
                alert('No existe esta asignatura');
            }
            
        });
        request.fail((response, textStatus, errorThrown) => {
            console.log("fail: ", response);
            console.log("textStatus: ", textStatus);
            console.log("errorThrown: ", errorThrown);
            alert('Error.')
        });
}

/**se envia el id del usuario y el id de la asignatura por ajax para hacer el delete*/
function eliminarAlumnoAsignatura(nuevoUsuarioAsignatura, idAsignatura){
    var jsonIDAlumnoAsignatura = {"idusuario": nuevoUsuarioAsignatura.idusuario, "idasignatura": idAsignatura[0].idasignatura};
    console.log(jsonIDAlumnoAsignatura);
    var request = $.ajax({
        url: "php/administrador/eliminarUsuarioAsignatura.php",
        type: "post",  
        dataType: 'json',
        data: jsonIDAlumnoAsignatura
        
    });
    //En caso de que la respuesta tenga éxito
    request.done((response, _textStatus, _jqXHR) => {
        console.log("done: ", response);
        if(!response.error){
            alert('Usuario eliminado de la asignatura correctamente');
            window.location.href = "menuAdministrador.html";
        }else{
            alert('Error. Comprueba que el id del usuario sea el correcto o que esté matriculado en la asignatura');
        }
        
    });
    request.fail((response, textStatus, errorThrown) => {
        console.log("fail: ", response);
        console.log("textStatus: ", textStatus);
        console.log("errorThrown: ", errorThrown);
        alert('Error.')
    });
}

function volver(){
    $('#volver').click(function(){
        location.href = "menuAdministrador.html"; 
    })
}

