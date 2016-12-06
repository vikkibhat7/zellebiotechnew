<?php
if($_POST)
{
    $to_email       = "service@zellebiotech.com"; //Recipient email, Replace with own email here

    //check if its an ajax request, exit if not
    if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {

        $output = json_encode(array( //create JSON data
            'type'=>'error',
            'text' => 'Sorry Request must be Ajax POST'
        ));
        die($output); //exit script outputting json data
    }

    //Sanitize input data using PHP filter_var().
    $user_name  = filter_var($_POST["fullName"], FILTER_SANITIZE_STRING);
    $company    = filter_var($_POST["company"], FILTER_SANITIZE_STRING);
    $user_email  = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $phone_number  = filter_var($_POST["phone_no"], FILTER_SANITIZE_NUMBER_INT);
    $comments  = filter_var($_POST["message"], FILTER_SANITIZE_STRING);
    $message_body  = filter_var($_POST["message_body"], FILTER_SANITIZE_STRING);

    //email body
    //$message_body = $message."\r\n\r\n-".$user_name."\r\nEmail : ".$user_email."\r\nPhone Number : ". $phone_number ;
    $subject = "Contact Us Form";
    //proceed with PHP email.
    $headers = 'From: '.$user_name.'' . "\r\n" .
    'Reply-To: '.$user_email.'' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    $send_mail = mail($to_email, $subject, $message_body, $headers);

    if(!$send_mail)
    {
        //If mail couldn't be sent output error. Check your PHP email configuration (if it ever happens)
        $output = json_encode(array('type'=>'error', 'text' => 'Could not send mail! Please check your PHP mail configuration.'));
        die($output);
    }else{
        $output = json_encode(array('type'=>'message', 'text' => 'Hi '.$user_name .' Thank you for your email!'));
        die($output);
    }
}
?>