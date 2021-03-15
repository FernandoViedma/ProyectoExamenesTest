$(document).ready(function() {
    if(document.cookie.indexOf("sesion=profesor") == -1){
        window.location.href = "login.html";
    }else{
        volver();
        volver1();
        mostrarTests();
    }
});

function mostrarTests(){
    /**Se obtiene el nombre de la asignatura almacenado en Local Storage y se envia por ajax
    al archivo php para que obtenga los tests de esa asignatura*/
    var nombreAsignatura = localStorage.getItem('asignatura');
        $('<h1>'+ nombreAsignatura + '</h1>').appendTo('#titulo');
        
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