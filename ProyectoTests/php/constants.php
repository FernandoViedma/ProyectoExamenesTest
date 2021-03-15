<?php
define("DB_HOST","localhost");
define("DB_USER","fernando");
define("DB_PASS","1234");
define("DB_NAME","proyectofinal");

function connection() {
    $conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    mysqli_set_charset($conn, "utf8");
    if ( !$conn ) {
        die('No connection: ' . mysqli_connect_error());
    } else {
        return $conn;
    }
}

?>