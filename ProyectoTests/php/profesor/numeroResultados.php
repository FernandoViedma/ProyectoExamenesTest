<?php

include '../constants.php';

$asignatura= $_POST['nombreAsignatura'];
$query = 'SELECT count(r.idtest) as numeroResultados, t.nombretest 
FROM tests t JOIN asignaturas a ON (t.idasignatura = a.idasignatura) JOIN resultados r ON (t.idtest = r.idtest) 
WHERE a.nombreasignatura="'.$asignatura.'"
GROUP BY t.nombretest
ORDER BY t.nombretest;';
$result = mysqli_query(connection(), $query);
$data = array();
if($result->num_rows > 0){
    while ( $row = $result->fetch_assoc() ){
        $data[] = $row;
        }
    }
    echo json_encode($data);

?>