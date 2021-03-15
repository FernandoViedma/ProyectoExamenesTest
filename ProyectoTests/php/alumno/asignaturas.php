<?php

include '../constants.php';
    $usuario= $_POST['codigoUsuario'];
    $query = 'SELECT a.nombreasignatura, a.image FROM asignaturas a JOIN usuarioasignatura m ON (a.idasignatura = m.idasignatura)
    JOIN usuarios u ON (m.idusuario = u.idusuario) 
    WHERE u.idusuario="'.$usuario.'"';
    $result = mysqli_query(connection(), $query);
    $data = array();
    if($result->num_rows > 0){
        while ( $row = $result->fetch_assoc()){
        $data[] = $row;
        }
    }
    echo json_encode($data);
        
?>