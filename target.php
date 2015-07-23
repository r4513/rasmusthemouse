<?php 

/**
*	POST
*/

$request_method = $_SERVER['REQUEST_METHOD'];

if($request_method == "POST"){


// grib data
$data = file_get_contents('php://input');
// konverter til json
// @see: http://php.net/manual/en/function.json-decode.php
$json = json_decode($data, true);


// smid data i database


// get from db 

// echo til scriptet

} 




// include db connect fil





?>