import Utilities from "./Utilities.js";

export default class UtilitiesSingleton {
    static instance = null ;
    static getInstance(){
        if (UtilitiesSingleton.instance==null)
            UtilitiesSingleton.instance = new Utilities();
        return UtilitiesSingleton.instance;
    }
}