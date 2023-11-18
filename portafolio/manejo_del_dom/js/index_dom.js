import hamburgerMenu from "../js/dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
import { formCountdown } from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import getGeolocation from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtro_busquedas.js";
import draw from "./dom/sorteo.js";
import slider from "./dom/carrusel.js";
import scrollSpy from "./dom/scroll_espia.js";
import smartVideo from "./dom/video_inteligente.js";
import contactFormValidations from "./dom/validaciones_formulario.js";
import speechReader from "./dom/narrador.js";
import videoSelect from "./dom/videoSeleccion.js";
import mensajeModal from "./dom/modal.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => { // esto permite que cargue el dom antes de ejecutar la funcion que esta dentro.
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("../../assets/Comodo.mp3", "#activar-alarma", "#desactivar-alarma");
    scrollTopButton(".scroll-top-btn");
    // darkTheme(".dark-theme-btn","dark-mode"); // se quito de aqui y se puso mas abajo afuera del DOMContentLoaded, porque se llamo otro evento DOMContentLoaded para usar el localStorage
    responsiveMedia(
        "youtube",
        "(min-width: 1024px)",
        '<center><div class="blue-link"><a href="https://www.youtube.com/watch?v=l_hxsfd9Uto" target="_blank">ver video en youtube</a></div></center>',
        '<iframe width="800" height="450" src="https://www.youtube.com/embed/5ox9MNQqrb0" title="portafolio 2 Node" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    );

    responsiveMedia(
        "gmaps",
        "(min-width: 1024px)",
        '<center><div class="blue-link"><a href="https://goo.gl/maps/G9nWc6eDAhNZ1J1J7" target="_blank">ver Mapa</a></div></center>',
        '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63451.50444539488!2d-75.61214203670626!3d6.300602209631392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smapa%20universidad%20de%20antioquia!5e0!3m2!1ses!2sco!4v1686072202848!5m2!1ses!2sco" width="800" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    );
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device"); // Deteccion de dispositivos
    webCam("webcam");
    getGeolocation("geolocation");
    searchFilters(".card-filter", ".card");
    draw("#winner-btn", ".player");
    slider();
    scrollSpy();
    smartVideo(); // En este caso no damos parametros porque vamos a usar el data-atribute.
    contactFormValidations();
    formCountdown();
})
//https://emojipedia.org/es/  AQUI PUEDO SACAR EMOTICONES POR BÚSQUEDA.
// Con este código vamos a detectar los shortcuts que se tecleen cuando este posado sobre el viewport (Interfaz de usuario)
// d.addEventListener("keyup",(e)=>{ //El evento keyup es cuando se suelta una tecla cuando esta posado sobre el viewport (Interfaz de usario)
// d.addEventListener("keypress",(e)=>{ //El evento keypress es cuando se mantiene presionada una tecla cuando esta posado sobre el viewport (Interfaz de usario)
d.addEventListener("keydown", (e) => { //El evento keydown es cuando se teclea una secuencia de caracteres
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode"); // se quito de arriba y se puso aqui afuera del DOMContentLoaded, porque se llamo otro evento DOMContentLoaded para usar el localStorage
networkStatus();
speechReader();
videoSelect();
mensajeModal("o1", "c1", "mb1"); // para explicar el código. Mensajes de informacion en ventana modal.
mensajeModal("o2", "c2", "mb2");
mensajeModal("o4", "c4", "mb4");