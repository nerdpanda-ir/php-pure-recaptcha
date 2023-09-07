import HomeControllerFactory from "./Services/HomeControllerFactory.js";

const homeController = HomeControllerFactory.getInstance();

window.addEventListener('load',homeController.main);