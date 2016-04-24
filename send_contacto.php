<?php
if($_POST)
{
    //$to_Email       = "ventas@dgequipments.com"; //Replace with recipient email address
    $to_Email       = "aranda.sebastian@gmail.com"; //Replace with recipient email address
    $subject        = '[Contacto] Isapres'; //Subject line for emails
   

    //check $_POST vars are set, exit if any missing
    /*if(!isset($_POST["nombre"]) || !isset($_POST["email"]) || !isset($_POST["empresa"]) || !isset($_POST["mensaje"]))
        $output = array('state'=>-1, 'text' => 'Los datos están incompletos.');
    */

    //DATA
    $nombreCompleto = filter_var($_POST["nombreCompleto"], FILTER_SANITIZE_STRING);
    $rut = filter_var($_POST["rut"], FILTER_SANITIZE_STRING);
    $correo = filter_var($_POST["correo"], FILTER_SANITIZE_STRING);
    $fechaNacimiento = filter_var($_POST["fechaNacimiento"], FILTER_SANITIZE_STRING);
    $sexo = filter_var($_POST["sexo"], FILTER_SANITIZE_STRING);
    
    //proceed with PHP email.

    /*
    Incase your host only allows emails from local domain,
    you should un-comment the first line below, and remove the second header line.
    Of-course you need to enter your own email address here, which exists in your cp.
    */
    //$headers = 'From: contacto@empresa.cl' . "\r\n" .
    $headers = 'From: '.$correo.'' . "\r\n" . //remove this line if line above this is un-commented
    'Reply-To: '.$correo.'' . "\r\n" .
    'X-Mailer: PHP/' . phpversion() . "\r\n" .
    'Content-type: text/html; charset=iso-8859-1' . "\r\n";
   
        // send mail
    $sentMail = @mail($to_Email, $subject,"<p>
        <b>Cliente:</b> ".$nombreCompleto."<br><br>
        <b>Rut Cliente:</b> ".$rut."<br><br>
        <b>Correo:</b> ".$correo."<br><br>
        <b>Fecha de Nacimiento:</b> ".$fechaNacimiento."<br><br>
        <b>Sexo:</b> ".$sexo."<br><br>
        </p>"
        , $headers);
   
    if (!$sentMail){
        $output = array('state'=> 0, 'msg' => 'El mail no pudo ser enviado. Contactese a: '.$to_Email);
    }
    else{
        $output = array('state'=> 1, 'msg' => 'Gracias por enviar tu cotización. Te responderemos a la brevedad.');
    }

    die(json_encode($output));
}