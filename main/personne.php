<?php
require"conn.php";
class Personne {
  public $id;
  public $fullname; 
  public $email; 
  public $mdp; 
  
    public function __construct($id, $fullname, $email, $mdp) {
        $this->id = $id;
        $this->fullname = $fullname;
        $this->email = $email;
        $this->mdp = $mdp;
    }
 public function insert($conn){
     $st=$conn->prepare("insert into personne values(default,?,?,?)");
     $st->execute(array($this->fullname,$this->email,$this->mdp));

    }
 
 public function selection_id($conn,$id){
     //requete parametrée
     $st=$conn->prepare("select * from personne where ID=?");
     $st->execute(array($id));
     $row=$st->fetch();
     $this->fullname=$row['fullname'];
     $this->email=$row['email'];
     $this->mdp=$row['mdp'];
 }
 
  public function verifier($con){
     $st=$con->prepare("select * from admin where email=? and mdp=?");
     $st->execute(array($this->email,$this->mdp));
     $num=$st->rowCount();
     if($num==1)
     {
         $row=$st->fetch();
         $_SESSION['id_s']=$row['id_admin'];
         header("location:profile.php");
         
         echo 'vous etes connecté(e)';
     }
     
         else 
             echo 'votre login n\'est pas dans la base';
 }

}


