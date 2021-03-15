<?php

include '../constants.php';

$query = "SELECT *
FROM usuarios;";
$result = mysqli_query(connection(), $query);
$result = mysqli_query(connection(), $query);
$data = array();
    if($result->num_rows > 0){
        while ( $row = $result->fetch_assoc() ){
            $data[] = $row;
        }
    }
    echo json_encode($data);

?>