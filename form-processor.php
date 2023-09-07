<?php session_start(); ?>
<?php
$realCaptcha = $_SESSION['captcha'];
$inputCaptcha = $_POST['captcha'];
if ($realCaptcha==$inputCaptcha)
    $_SESSION['messages']['ok']['captcha'] = 'captcha is ok !!!';
else
    $_SESSION['messages']['fail']['captcha'] = 'captcha is not ok';
header('location:index.php');
