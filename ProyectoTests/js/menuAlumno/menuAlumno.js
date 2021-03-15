$(document).ready(function() {
    /** Se comprueba que la cookie exista. Si no existe se redirige al login */
    if(document.cookie.indexOf("sesion=alumno") == -1){
        window.location.href = "login.html";
    }else{
        iniciarMenu();
        volver();
    }
});

function iniciarMenu(){
    /** Se obtiene el código del usuario almacenado en Local Storage y se envia por ajax
    al archivo php para que obtenga las asignaturas a las que está matriculado el alumno */
    var codigoUsuarioStorage = localStorage.getItem('usuario');
        var jsonCodigoUsuario = { "codigoUsuario": codigoUsuarioStorage };
        var request = $.ajax({
            url: "php/alumno/asignaturas.php",
            type: "post",  
            dataType: 'json',
            data: jsonCodigoUsuario
        });

        /** En caso de que la respuesta tenga éxito */
        request.done((response, _textStatus, _jqXHR) => {
            console.log("done: ", response);
            var asignaturas = response;
            /** Con un for se recorre el array con las asignaturas y se pinta un div con cada una */
            for(var i = 0; i < asignaturas.length; i++){
                $('<div id="mostrarAsignaturas"><a id="p' + i + '" href="#" name="'
                + asignaturas[i].nombreasignatura + '" class="mostrarAsignaturas"><span class="nav-label" title="'
                + asignaturas[i].nombreasignatura + '"> ' + asignaturas[i].nombreasignatura +
                '</span></a><br><img src="' + asignaturas[i].image + '" width="100px" height="100px"></div>').appendTo("#asignaturas");
            }
            /** Al hacer click sobre una asignatura se obtiene el nombre de la asignatura 
            y se almacena en Local Storage. También se redirige a el archivo html correspondiente. */
            $('.mostrarAsignaturas').click(function(){
                var guardarNombreAsignatura= $(this).attr("name");
                localStorage.setItem('asignatura', guardarNombreAsignatura); 
                location.href = "menuTests.html";   
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
        location.href = "login.html"; 
    })
}