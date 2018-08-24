import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import ModalContact from './modules/ModalContact';
import ZagOnShow from './modules/ZagOnShow';



var mobileMenu = new MobileMenu();
var modalContact = new ModalContact();


new ZagOnShow($(".zigzag"), "85%");
