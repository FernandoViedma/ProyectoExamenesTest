<?php

include '../constants.php';
    $usuario= $_POST['usuario'];
    $contrasena= $_POST['contrasena'];
    $query = 'SELECT idusuario, rol
    FROM usuarios
    WHERE nombreusuario="'.$usuario.'" AND contrasena="'.$contrasena.'"';
    $result = mysqli_query(connection(), $query);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo json_encode(array('error'=>false, 'tipo'=>$row['rol'], 'codigoUsuario'=>$row['idusuario']));
        }
    } else {
        echo json_encode(array('error'=>true));
    }

?>