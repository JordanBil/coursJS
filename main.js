import { h1IntoJoke } from "./welcomeServiceJS.js";

const currentPath = window.location.pathname;

if (currentPath === "/" || currentPath === "/index.html") {
    h1IntoJoke();
}
