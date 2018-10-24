import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import ModalContact from './modules/ModalContact';
import ZagOnShow from './modules/ZagOnShow';
import ScrollShow from './modules/ScrollShow';



var mobileMenu = new MobileMenu();
var modalContact = new ModalContact();


new ZagOnShow($(".zigzag"), "85%");

new ScrollShow($(".box"), "70%");