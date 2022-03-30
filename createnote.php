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

 $statement = $mysqli->prepare('INSERT INTO `notes` (title, note) VALUES (?, ?)');



 $statement->bind_param('ss', $title, $note );

 $title = $_POST['title'];
 $note = $_POST['note'];

 

 $statement->execute();

 echo 'New note created successfully';

 $statement->close();
 $mysqli->close();

 

?>