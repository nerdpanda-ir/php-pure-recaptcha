import UtilitiesSingleton from "./UtilitiesSingleton.js";
import CaptchaReloaderClickedFactory from "./CaptchaReloaderClickedFactory.js";
import HomeController from "../Controllers/HomeController.js";

export default class HomeControllerFactory {
    static getInstance(){
        const utilities = UtilitiesSingleton.getInstance();
        const captchaReloaderClickedListener = CaptchaReloaderClickedFactory.instance();
        return new HomeController(utilities,captchaReloaderClickedListener);
    }
}