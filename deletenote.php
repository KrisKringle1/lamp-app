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

 $_POST = json_decode(file_get_contents("php://input"), true);

 


 echo 'hello world';
 $mysqli->close();


?>


<!--  $db_host = 'localhost';
 $db_user = 'root';
 $db_password = 'root';
 $db_db = 'test';

 $mysqli = @new mysqli(
   $db_host,
   $db_user,
   $db_password,
   $db_db
 );

 echo 'hello world';
   
 if ($mysqli->connect_error) {
   echo 'Errno: '.$mysqli->connect_errno;
   echo '<br>';
   echo 'Error: '.$mysqli->connect_error;
   exit();
 }

 $_POST = json_decode(file_get_contents("php://input"), true);

 $id = $_POST['id'];

$sql = `DELETE * FROM  `notes` WHERE id = $id`;

if ($mysqli->query($sql) === TRUE) {
    echo "Record deleted successfully";
  } else {
    echo "Error deleting record: " . $conn->error;
  }


 $mysqli->close();
 -->