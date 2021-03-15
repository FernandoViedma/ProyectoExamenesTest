$(document).ready(function() {
    if(document.cookie.indexOf("sesion=profesor") == -1){
        window.location.href = "login.html";
    }else{
        volver();
        obtenerNotasAsignatura();
    }
});

/**Se obtiene las notas medias de los alumnos en cada test */
function obtenerNotasAsignatura(){
    var nombreAsignatura = localStorage.getItem('asignatura');
        $('<h1>'+ nombreAsignatura + '</h1>').appendTo('#titulo');
        var jsonAsignatura = { "nombreAsignatura": nombreAsignatura };
        var request = $.ajax({
            url: "php/profesor/notasAsignatura.php",
            type: "post",  
            dataType: 'json',
            data: jsonAsignatura
        });

        request.done((response, _textStatus, _jqXHR) => {
            console.log("done: ", response);
            var notasTest = response;
            obtenerNumeroResultadosExamen(jsonAsignatura, notasTest);            
        });

        request.fail((response, textStatus, errorThrown) => {
            console.log("fail: ", response);
            console.log("textStatus: ", textStatus);
            console.log("errorThrown: ", errorThrown);
            alert('Error')
        });
}

/** Se obtiene el número de alumnos que ha realizado cada test */
function obtenerNumeroResultadosExamen(jsonAsignatura, notasTest){
    var request = $.ajax({
        url: "php/profesor/numeroResultados.php",
        type: "post",  
        dataType: 'json',
        data: jsonAsignatura
    });

    request.done((response, _textStatus, _jqXHR) => {
        console.log("done: ", response);
        var numeroResultadosExamen = response;
        renderCharts(notasTest, numeroResultadosExamen);
    });

    request.fail((response, textStatus, errorThrown) => {
        console.log("fail: ", response);
        console.log("textStatus: ", textStatus);
        console.log("errorThrown: ", errorThrown);
        alert('Error')
    });

}

/** Se seleccionan los canvas del html. */
function renderCharts(notasTest, numeroResultadosExamen){
    const ctx = document.querySelector('#chart').getContext('2d');
    const ctx1 = document.querySelector('#chart1').getContext('2d');
    totalCasesChart(ctx, ctx1, notasTest, numeroResultadosExamen);
}

/** Se crean los gráficos. */
function totalCasesChart(ctx, ctx1, notasTest, numeroResultadosExamen){
    const chart = new Chart(ctx,{
        type: 'bar',
        data:{
            labels: notasTest.map(item => item.nombretest),
            datasets: [
                { 
                    label: 'Nota media',
                    maxBarThickness: 200,
                    borderColor: 'blue',
                    backgroundColor: '#6666ff',
                    borderWidth: 1,
                    order: 2,
                    data: notasTest.map(item => item.nota) 
                },
                {
                    label: 'Aprobado',
                    data: notasTest.map(item => 5),
                    borderColor: 'red',
                    type: 'line',
                    order: 1
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Nota media de los alumnos por test',
                fontSize: 30,
                padding: 30,
                fontColor: 'black'
            },
            scales: {
                yAxes:[{
                    ticks:{
                        beginAtZero: true,
                        suggestedMax: 10
                    }
                }]
            }
        }
    })

    const chart1 = new Chart(ctx1,{
        type: 'bar',
        data:{
            labels: notasTest.map(item => item.nombretest),
            datasets: [
                { 
                    label: 'Alumnos',
                    maxBarThickness: 200,
                    borderColor: 'green',
                    backgroundColor: '#00cc66',
                    borderWidth: 1,
                    data: numeroResultadosExamen.map(item => item.numeroResultados) 
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Número de alumnos que han realizado el test',
                fontSize: 30,
                padding: 30,
                fontColor: 'black'
            },
            layout: {
                padding: {                
                  top: 100                
                }
              },
            scales: {
                yAxes:[{
                    ticks:{
                        beginAtZero: true,
                        userCallback: function(label) {
                            if (Math.floor(label) === label) {
                                return label;
                            }
                        }
                    }
                }]
            }
        }
    })
}

function volver(){
    $('#volver').click(function(){
        location.href = "menuMostrarResultados.html"; 
    })
}

