import Utilities from "../Services/Utilities.js";
export default class CaptchaReloaderClicked {
    utilities = null ;
    captchaImageElement = null ;
    constructor(utilities) {
        this.utilities = utilities ;
        this.captchaImageElement = this.getUtilities().getCaptchaImageElement();
    }
    subscribe= (event)=>{
        this.captchaImageElement.src='captcha.php?token='+Date.now();
    }
    /** @return Utilities */
    getUtilities(){
        return this.utilities;
    }
}