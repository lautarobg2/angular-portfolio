<?php 
	$nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
	$asunto = $_POST['asunto'];
	$mensaje = $_POST['mensaje'];

	echo $nombre. "ha dicho <br/>".$mensaje;
	if(mail('lautiibogado@gmail.com', $asunto, $mensaje)){
		echo "mail enviado";
	}else{
		echo "uy";
	}
 ?>