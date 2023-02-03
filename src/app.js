//import {generatePalette} from "./modules/utils.js";
import {generePalette, isHex, genereOmbre} from "./modules/utilsOld.js";
import Color from "./modules/Color.js";
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
const clr = new Color([100, 200, 100]);

const input = document.querySelector("input");
const main = document.querySelector("main");
const notyf = new Notyf();

input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
            if (isHex(input.value)) {
                const palette = generePalette(input.value);
                displayColor(palette);
                const ombre = genereOmbre(input.value);
                document.querySelector(":root").style.setProperty("--shadow-color", ombre);

            } else {
                notyf.error("<<" + input.value + ">> is not a valid Hexadecimal color.");
            }
    }
});

main.addEventListener("click", (e) => {
        if(e.target.classList.value === "color") {
            const dataColor = e.target.getAttribute("data-color");
            navigator.clipboard.writeText(dataColor).then(() => {
                notyf.success(`copied ${input.value.toUpperCase()} to clipboard`)
            }, () => {
                notyf.error("erreur serveur")
            });
        }
    }
);


function displayColor(palette) {


    if(main.children) {
        main.innerHTML = "";
    }

    for (const paletteElement of palette) {

        const color = new Color(paletteElement);
        console.log(color);
        color.display();
    }

    document.querySelector("header").classList.add("minimized");

    const colorsMain = document.body.querySelector("main").children;

    document.body.style.background = (`linear-gradient(-45deg, ${colorsMain[0].textContent}, ${colorsMain[(colorsMain.length/2).toFixed()].textContent}, ${colorsMain[colorsMain.length-1].textContent}`);
    document.body.style.backgroundSize = `400% 400%`


}


