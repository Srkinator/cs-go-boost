<?php
	header('Content-type: application/json');
	
    $status = array(
        'type'=>'failed',
        'message'=>'Email sending failed!'
    );

    $name = @trim(stripslashes($_POST['name'])); 
    $email = @trim(stripslashes($_POST['email'])); 
    $subject = @trim(stripslashes($_POST['phone'])); 
    $message = @trim(stripslashes($_POST['message'])); 

    $email_from = $email;
    $email_to = 'email@gmail.com';

    $body = 'Name: ' . $name . "\n\n" . 'Email: ' . $email . "\n\n" . 'Subject: ' . $subject . "\n\n" . 'Message: ' . $message;

    $success = @mail($email_to, $subject, $body, 'From: <'.$email_from.'>');

    if ($success) {
        $status = array(
                'type'=>'success',
                'message'=>'Email sent!'
            );
    }

    echo json_encode($status);
    die; 