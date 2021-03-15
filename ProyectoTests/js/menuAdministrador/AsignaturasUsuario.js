$(document).ready(function() {
    if(document.cookie.indexOf("sesion=administrador") == -1){
        window.location.href = "login.html";
    }else{
        volver();
        obtenerDatosAsignaturas();    
    }
});

/** Se obtienen las asignaturas del usuario */
function obtenerDatosAsignaturas(){
    var idUsuario = localStorage.getItem("idusuario");
    var idJson = {"idusuario": idUsuario};
    var request = $.ajax({
        url: "php/administrador/mostrarAsignaturasUsuario.php",
        type: "post",  
        dataType: 'json',
        data: idJson            
    });
    
    request.done((response, _textStatus, _jqXHR) => {
        console.log("done: ", response);
        var asignaturas = response;
        pintarTabla(asignaturas);
        
    });

    request.fail((response, textStatus, errorThrown) => {
        console.log("fail: ", response);
        console.log("textStatus: ", textStatus);
        console.log("errorThrown: ", errorThrown);
        alert('Error.')
    });
}

function pintarTabla(asignaturas){
    for(var i = 0; i < asignaturas.length; i++){
        $('<tr align="center"><td>' + asignaturas[i].nombreasignatura + '</td></tr>').appendTo("#listaAsignaturas");
    }
}

function volver(){
    $('#volver').click(function(){
        location.href = "mostrarUsuarios.html"; 
    })
}