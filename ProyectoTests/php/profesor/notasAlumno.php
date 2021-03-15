<?php

include '../constants.php';

$asignatura= $_POST['nombreAsignatura'];
$idalumno= $_POST['idAlumno'];
$query = 'SELECT t.idtest, t.nombretest, r.nota 
FROM resultados r JOIN tests t ON (r.idtest = t.idtest) JOIN asignaturas a ON (a.idasignatura = t.idasignatura)
WHERE a.nombreasignatura="'.$asignatura.'" AND r.idusuario="'.$idalumno.'"';
$result = mysqli_query(connection(), $query);
$data = array();
    if($result->num_rows > 0){
        while ( $row = $result->fetch_assoc() ){
            $data[] = $row;
        }
    }
    echo json_encode($data);

?>