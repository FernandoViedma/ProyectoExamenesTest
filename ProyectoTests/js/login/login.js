$(document).ready(function() {
    logout();
    login();
});

function login(){
    /**Al hacer click en login se guardan los datos en un JSON y se hace llamada ajax
    para comprobar que los datos sean correctos.*/
    $("#enter").click(function() {
        var activeInfo = { "usuario": $('#usuario').val(), "contrasena": $('#contrasena').val() };
        var request = $.ajax({
            url: "php/login/login.php",
            type: "post",  
            dataType: 'json',
            data: activeInfo
            
        });
        /**  En caso de que la respuesta tenga éxito */
        request.done((response, _textStatus, _jqXHR) => {
            console.log("done: ", response);
            /** Si existen datos correspondientes */
            if(!response.error){
                /** guardamos el código del usuario en local storage */
                var infoUsuario = response.codigoUsuario; 
                localStorage.setItem('usuario', infoUsuario);
                /** Y el tipo de usuario es 0 redirecciona al menú profesor y se genera una cookie
                que indique que se ha iniciado la sesion */
                if(response.tipo == 'profesor'){
                    location.href='menuProfesor.html';
                    document.cookie = "sesion=profesor";
                /** Si el tipo de usuario es 1 redirecciona al menu alumnos y se genera una cookie */
                }else if(response.tipo == 'alumno'){
                    location.href='menuAlumno.html';
                    document.cookie = "sesion=alumno";
                }else if(response.tipo =='administrador'){
                    location.href='menuAdministrador.html';
                    document.cookie = "sesion=administrador";
                }
            /** Si no existen esos datos */
            }else{
                alert('Las credenciales no son correctas, por favor revíselas y vuelva a intentarlo.');
            }
            
        });
        request.fail((response, textStatus, errorThrown) => {
            console.log("fail: ", response);
            console.log("textStatus: ", textStatus);
            console.log("errorThrown: ", errorThrown);
            alert('Las credenciales no son correctas, por favor revíselas y vuelva a intentarlo.')
        });
    });
}

/** Al hacer click sobre el botón de logout se elimina la cookie y se manda a la página de login */
function logout(){
    $("#logout").click(function () {
        document.cookie = "sesion= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        window.location.href = "login.html";
    });
}