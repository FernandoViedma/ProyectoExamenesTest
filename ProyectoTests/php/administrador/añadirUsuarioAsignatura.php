<?php

include '../constants.php';

$usuario= $_POST['idusuario'];
$asignatura = $_POST['idasignatura'];

$query = 'INSERT INTO usuarioasignatura (idusuario, idasignatura)
VALUES ("'.$usuario.'","'.$asignatura.'");';
$result = mysqli_query(connection(), $query);
    if($result){
        echo json_encode(array('error'=>false));
    }else{
        echo json_encode(array('error'=>true)); 
    }

?>