$(document).ready(function() {
    if(document.cookie.indexOf("sesion=administrador") == -1){
        window.location.href = "login.html";
    }else{
        volver();
        
    }
});

function volver(){
    $('#volver').click(function(){
        location.href = "login.html"; 
    })
}

