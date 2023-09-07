<?php session_start(); ?>
<?php  require_once __DIR__.'/config/captcha.php'; ?>
<?php require_once __DIR__.'/functions.php'; ?>
<?php
    $captchaBackgroundDestination = __DIR__.'/img/captcha.png';
    $captchaBackground = imagecreatefrompng($captchaBackgroundDestination);

    $captchaLength = getCaptchaLength();
    $captchaCode = getCaptchaCode($captchaLength);
    $_SESSION['captcha'] = $captchaCode;

    $captchaFontDestination = __DIR__.'/fonts/font.ttf';
    imagettftext(
        $captchaBackground,26,0,50,75,10,
        $captchaFontDestination,$captchaCode
    );
    header('content-type:image/png');
    imagepng($captchaBackground);
    imagedestroy($captchaBackground);