<?php
function getRandomNumberAsci():int{
    return rand(48,57);
}
function getRandomCapitalAlphabetAsci():int {
    return rand(65,90);
}
function getRandomSmallAlphabetAsci():int {
    return rand(97,122);
}
function getRandomCharAsciCode(){
    $strategy = rand(0,3);
    switch ($strategy){
        case 0 :
        default :
            return getRandomNumberAsci();
        case 1 :
            return getRandomSmallAlphabetAsci();
        case 2 :
            return getRandomCapitalAlphabetAsci();
    }
}
function getRandomAlphabet():string {
    return chr(getRandomCharAsciCode());
}
function getCaptchaCode(int $length):string {
    $captchaCode = '';
    for ($counter = 0 ; $counter<$length;$counter++)
        $captchaCode.= getRandomAlphabet();
    return $captchaCode;
}
function getCaptchaLength():int{
    return rand(MIN_CAPTCHA_LENGTH,MAX_CAPTCHA_LENGTH);
}