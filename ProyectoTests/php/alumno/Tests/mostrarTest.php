<?php

include '../../constants.php';

$nombreTest= $_POST['nombreTest'];
    $query = 'SELECT p.pregunta, p.opciones, p.solucion, p.image
    FROM preguntas p JOIN tests t ON (p.idtest = t.idtest)
    WHERE t.nombretest="'.$nombreTest.'"';
    $result = mysqli_query(connection(), $query);
    $data = array();
    if($result->num_rows > 0){
        while ( $row = $result->fetch_assoc() ){
            $data[] = $row;
        }
    echo json_encode($data);
    }
   
?>