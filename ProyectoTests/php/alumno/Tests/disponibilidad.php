<?php

include '../../constants.php';

$idTest= $_POST['idTest'];
$idAlumno = $_POST['idAlumno'];
$query = 'SELECT nota
FROM resultados
WHERE idusuario="'.$idAlumno.'" AND idtest="'.$idTest.'"';
$result = mysqli_query(connection(), $query);
if($result->num_rows > 0){
    while($row = $result->fetch_assoc()){
        echo json_encode(array('error'=>false, 'notaAlumno'=>$row['nota']));
    }
}else{
    echo json_encode(array('error'=>true));
}
?>