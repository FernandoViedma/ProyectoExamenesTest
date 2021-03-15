<?php

include '../constants.php';

$usuario= $_POST['usuario'];
$contrasena = $_POST['contrasena'];
$nombre = $_POST['nombre'];
$apellidos = $_POST['apellidos'];
$rol = $_POST['rol'];
$email= $_POST['email'];


$query = "INSERT INTO usuarios (nombreusuario, contrasena, nombre, apellidos, email, rol)
VALUES ('$usuario','$contrasena','$nombre','$apellidos','$email','$rol')";
$result = mysqli_query(connection(), $query);
    if($result){
        echo json_encode(array('error'=>false));
    }else{
        echo json_encode(array('error'=>true)); 
    }

?>