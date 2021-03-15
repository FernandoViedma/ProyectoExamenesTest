<?php

include '../../constants.php';

    $nombreAsignatura= $_POST['nombreAsignatura'];
    $query = 'SELECT t.nombretest 
    FROM tests t JOIN asignaturas a ON (a.idasignatura = t.idasignatura)
    WHERE a.nombreasignatura="'.$nombreAsignatura.'"';
    $result = mysqli_query(connection(), $query);
    $data = array();
    if($result->num_rows > 0){
        while ( $row = $result->fetch_assoc() ){
            $data[] = $row;
        }
    echo json_encode($data);
    }
    

?>