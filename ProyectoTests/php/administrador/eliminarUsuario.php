<?php

include '../constants.php';

$id= $_POST['id'];

$query = "DELETE FROM usuarios WHERE idusuario='$id'";
$result = mysqli_query(connection(), $query);
    if($result){
        echo json_encode(array('error'=>false));
    }else{
        echo json_encode(array('error'=>true)); 
    }

?>