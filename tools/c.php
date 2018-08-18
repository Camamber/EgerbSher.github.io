<?php
$file = "co";
  if ($_GET['action'] == "add") {
    file_put_contents($file, $_GET["count"]);
  }
echo file_get_contents($file);  
?>