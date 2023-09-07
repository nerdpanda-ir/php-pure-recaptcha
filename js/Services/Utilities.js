export default class Utilities {
    getCaptchaReloaderElement(){
        return window.document.body.querySelector('#captcha-reloader');
    }
    getCaptchaImageElement(){
        return window.document.body.querySelector('#captcha-image');

    }
}