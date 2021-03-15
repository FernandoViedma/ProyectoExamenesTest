$(document).ready(function() {
    if(document.cookie.indexOf("sesion=administrador") == -1){
        window.location.href = "login.html";
    }else{
        volver();
        obtenerDatosTabla();
        
    }
});

function obtenerDatosTabla(){
    var request = $.ajax({
        url: "php/administrador/mostrarUsuarios.php",
        type: "get",  
        dataType: 'json'            
    });
    
    request.done((response, _textStatus, _jqXHR) => {
        console.log("done: ", response);
        var usuarios = response;
        pintarTabla(usuarios);
        verAsignaturas();
    });

    request.fail((response, textStatus, errorThrown) => {
        console.log("fail: ", response);
        console.log("textStatus: ", textStatus);
        console.log("errorThrown: ", errorThrown);
        alert('Error.')
    });
}

function pintarTabla(usuarios){
    for(var i = 0; i < usuarios.length; i++){
        $('<tr class="mostrarUsuarios" name="' + usuarios[i].idusuario + '"><td>' + usuarios[i].idusuario + '</td><td>' + usuarios[i].nombreusuario
         + '</td><td>' + usuarios[i].contrasena + '</td><td>' + usuarios[i].nombre + '</td><td>' + usuarios[i].apellidos 
         + '</td><td>' + usuarios[i].email + '</td><td>' + usuarios[i].rol + '</td><td><a  href="#">Ver asignaturas</a></td></tr>').appendTo("#listaUsuarios");
    }
}

function verAsignaturas(){
    $('.mostrarUsuarios').click(function(){
        var idUsuario= $(this).attr("name");
        localStorage.setItem('idusuario', idUsuario);
        location.href = "mostrarAsignaturasUsuario.html"; 
    });
}

function volver(){
    $('#volver').click(function(){
        location.href = "menuAdministrador.html"; 
    })
}