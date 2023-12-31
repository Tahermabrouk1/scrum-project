<?php
$host='localhost';
$db='client';
$login='root';
$mdp='';
try{
    $pdo=new PDO("mysql:host=$host;dbname=$db",$login,$mdp);
}
catch (PDOException $e){
    echo"erreur".$e->getMessage();
}
?>
