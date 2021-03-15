<?php

include '../constants.php';

$usuario= $_POST['idusuario'];

$query = 'SELECT a.nombreasignatura
FROM asignaturas a JOIN usuarioasignatura ua ON (a.idasignatura = ua.idasignatura)
WHERE ua.idusuario = "'.$usuario.'";';
$result = mysqli_query(connection(), $query);
$result = mysqli_query(connection(), $query);
$data = array();
    if($result->num_rows > 0){
        while ( $row = $result->fetch_assoc() ){
            $data[] = $row;
        }
    }
    echo json_encode($data);

?>