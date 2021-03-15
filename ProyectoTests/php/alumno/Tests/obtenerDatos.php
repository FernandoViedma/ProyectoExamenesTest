<?php

include '../../constants.php';
$nombreTest= $_POST['nombreTest'];
    $query = 'SELECT idtest FROM tests WHERE nombretest="'.$nombreTest.'"';
    $result = mysqli_query(connection(), $query);
    if($result->num_rows > 0){
        while($row = $result->fetch_assoc()){
            echo json_encode(array('error'=>false, 'idTest'=>$row['idtest']));
        }
    }else{
        echo json_encode(array('error'=>true));
    }

?>