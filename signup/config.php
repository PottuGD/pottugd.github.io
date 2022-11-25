<?php
define('DB_SERVER', '109.204.224.164:3306');
define('DB_USERNAME', 'u159_gT1sLugaYQ');
define('DB_PASSWORD', 'Aca4waqp4^^F=lGjbh0AU@.0');
define('DB_NAME', 's159_PottuMC');
 
/* Attempt to connect to MySQL database */
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
?>