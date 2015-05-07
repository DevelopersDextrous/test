<?php

$con = mysqli_connect("localhost", "root", "", "hridoy");
// Check connection
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

// Perform queries 
$result = mysqli_query($con, "SELECT * FROM table1 WHERE name = 'arif'");
$test = "test";

while ($row = mysqli_fetch_row($result)) {
    //print_r($row);
    echo $row[0] . " ";
    if ($row[0] == "arif") {
        header("Location: myFirstPHP2.php?name=$row[0]&test=$test");
        exit();
    }
}



mysqli_close($con);
?>