$(document).ready(function() {
    if(document.cookie.indexOf("sesion=administrador") == -1){
        window.location.href = "login.html";
    }else{
        volver();
        obtenerUsuarios();
    }                              
});

/** se obtiene la lista de usuarios */
function obtenerUsuarios(){
    var request = $.ajax({
        url: "php/administrador/mostrarUsuarios.php",
        type: "get",  
        dataType: 'json'            
    });
    
    request.done((response, _textStatus, _jqXHR) => {
        console.log("done: ", response);
        var usuarios = response;
        pintarTabla(usuarios);
        eliminarUsuario();
    });

    request.fail((response, textStatus, errorThrown) => {
        console.log("fail: ", response);
        console.log("textStatus: ", textStatus);
        console.log("errorThrown: ", errorThrown);
        alert('Error.')
    });
}

/** se pinta la tablea con los usuarios */
function pintarTabla(usuarios){
    for(var i = 0; i < usuarios.length; i++){
        $('<tr class="mostrarUsuarios" name="' + usuarios[i].idusuario + '"><td><a  href="#">' + usuarios[i].idusuario + '</a></td><td>' + usuarios[i].nombreusuario
         + '</td><td>' + usuarios[i].contrasena + '</td><td>' + usuarios[i].nombre + '</td><td>' + usuarios[i].apellidos 
         + '</td><td>' + usuarios[i].email + '</td><td>' + usuarios[i].rol + '</td></tr>').appendTo("#listaUsuarios");
    }
}

/** al clicar sobre el id de un usuario se envia su id por ajax y se hace el delete. */
function eliminarUsuario(){
    $('.mostrarUsuarios').click(function(){
        var idUsuario= $(this).attr("name");
        var jsonID = { "id": idUsuario}
        var request = $.ajax({
            url: "php/administrador/eliminarUsuario.php",
            type: "post",  
            dataType: 'json',
            data: jsonID            
        });
        
        request.done((response, _textStatus, _jqXHR) => {
            console.log("done: ", response);
            alert("Usuario eliminado correctamente!");
            window.location.href = "menuAdministrador.html";
        });

        request.fail((response, textStatus, errorThrown) => {
            console.log("fail: ", response);
            console.log("textStatus: ", textStatus);
            console.log("errorThrown: ", errorThrown);
            alert('Error.')
        });
    });  
}

function volver(){
    $('#volver').click(function(){
        location.href = "menuAdministrador.html"; 
    })
}

