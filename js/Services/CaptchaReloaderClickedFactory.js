import UtilitiesSingleton from "./UtilitiesSingleton.js";
import CaptchaReloaderClicked from "../Listeners/CaptchaReloaderClicked.js";
export default class CaptchaReloaderClickedFactory{
    static instance(){
        return new CaptchaReloaderClicked(UtilitiesSingleton.getInstance());
    }
}