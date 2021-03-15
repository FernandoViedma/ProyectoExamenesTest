<?php

include '../../constants.php';

$idTest= $_POST['idTest'];
$idAlumno = $_POST['idAlumno'];
$nota = $_POST['notaAlumno'];
$query = "INSERT INTO resultados (idusuario, idtest, nota)
VALUES ('$idAlumno','$idTest','$nota')";
$result = mysqli_query(connection(), $query);
    if($result){
        echo json_encode(array('error'=>false));
    }else{
        echo json_encode(array('error'=>true)); 
    }

?>