<?php

include '../constants.php';

$asignatura= $_POST['nombreAsignatura'];
$query = 'SELECT u.nombre, u.apellidos, u.idusuario FROM usuarios u JOIN usuarioasignatura ua ON (ua.idusuario = u.idusuario)
JOIN asignaturas a ON (ua.idasignatura = a.idasignatura) 
WHERE a.nombreasignatura="'.$asignatura.'" AND u.rol="alumno"';
$result = mysqli_query(connection(), $query);
$data = array();
if($result->num_rows > 0){
    while ( $row = $result->fetch_assoc() ){
        $data[] = $row;
        }
    }
    echo json_encode($data);

?>