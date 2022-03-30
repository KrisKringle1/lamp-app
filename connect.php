<?php
  $db_host = 'localhost';
  $db_user = 'root';
  $db_password = 'root';
  $db_db = 'test';
 
  $mysqli = @new mysqli(
    $db_host,
    $db_user,
    $db_password,
    $db_db
  );
    
  if ($mysqli->connect_error) {
    echo 'Errno: '.$mysqli->connect_errno;
    echo '<br>';
    echo 'Error: '.$mysqli->connect_error;
    exit();
  }

$myquery = "
   SELECT  * FROM  `notes`
   ";


$result = $mysqli->query($myquery);
if(!$result){
    echo 'no results';
} 

$data = array();



$nums = mysqli_num_rows($result);


for ($x = 0; $x < mysqli_num_rows($result); $x++) {
  $data[] = mysqli_fetch_assoc($result);
}
 

echo json_encode($data);

  $mysqli->close();
?>
