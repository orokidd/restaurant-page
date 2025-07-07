import "./styles.css"
import { loadHome } from "./home";
import { initNavigation } from "./navigations"

const app = (() => {
    loadHome();
    initNavigation();
})();