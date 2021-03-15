$(document).ready(function() {
    if(document.cookie.indexOf("sesion=administrador") == -1){
        window.location.href = "login.html";
    }else{
        volver();
        añadirUsuario();
    }
});

function añadirUsuario(){
    $("#añadir").click(function() {
        //Se comprueba que no haya campos vacíos. 
        if($('#usuario').val().length == 0 || $('#contrasena').val().length == 0 || $('#nombre').val().length == 0 || $('#apellidos').val().length == 0 || $('#mail').val().length == 0 || $('#rol').val().length == 0){
            alert("Faltan campos por rellenar");
        }else{
            //Se envian los valores por ajax para hacer el insert. 
            var nuevoUsuario = { "usuario": $('#usuario').val(), "contrasena": $('#contrasena').val(), "nombre": $('#nombre').val(), "apellidos": $('#apellidos').val(), "email": $('#mail').val(), "rol": $('#rol').val() };
            var request = $.ajax({
                url: "php/administrador/añadirUsuario.php",
                type: "post",  
                dataType: 'json',
                data: nuevoUsuario
                
            });
            //En caso de que la respuesta tenga éxito
            request.done((response, _textStatus, _jqXHR) => {
                console.log("done: ", response);
                //Si se ha añadido correctamente
                if(!response.error){
                    alert("El usuario se ha añadido correctamente!");
                    window.location.href = "menuAdministrador.html";
                //Si no se ha añadido
                }else{
                    alert('Error al introducir los datos. Es posible que este nombre de usuario ya exista. ');
                }
                
            });
            request.fail((response, textStatus, errorThrown) => {
                console.log("fail: ", response);
                console.log("textStatus: ", textStatus);
                console.log("errorThrown: ", errorThrown);
                alert('Error.')
            });
        }
    });
}

function volver(){
    $('#volver').click(function(){
        location.href = "menuAdministrador.html"; 
    })
}