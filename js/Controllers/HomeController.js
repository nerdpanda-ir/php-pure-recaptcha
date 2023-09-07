import Utilities from "../Services/Utilities.js";
import CaptchaReloaderClicked from "../Listeners/CaptchaReloaderClicked.js";
export default class  {
    utilities = null ;
    captchaReloaderListener = null;
    constructor(utilities,captchaReloaderListener) {
        this.utilities = utilities ;
        this.captchaReloaderListener = captchaReloaderListener;
    }
    main = ()=>{
        const captchaReloaderElement = this.getUtilities().getCaptchaReloaderElement();
        captchaReloaderElement.addEventListener(
            'click',
            this.getCaptchaReloaderListener().subscribe
        );
    }
    /** @return Utilities */
    getUtilities(){
        return this.utilities;
    }
    /** @return CaptchaReloaderClicked */
    getCaptchaReloaderListener(){
        return this.captchaReloaderListener;
    }
}