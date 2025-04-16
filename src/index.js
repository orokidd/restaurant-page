import { loadHome } from "./home";

(function app() {
    const content = document.querySelector('#content');
    content.appendChild(loadHome());
})();


