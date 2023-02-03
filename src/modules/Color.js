var convert = require('color-convert');

class Color {
    #hsl;
    #hex;

    constructor(hsl) {
        this.#hsl = hsl;
        this.#hex = "#" + convert.hsl.hex(this.#hsl);
    }


    display() {
        const html = `
            <div class="color" data-color="${this.#hex}" style="background-color: ${this.#hex}"><p style="${this.#hsl[2] < 60 ? "#ffffff" : "#000000"}">${this.#hex}</p></div> `

        document.querySelector("main").insertAdjacentHTML("afterbegin", html);

    }
}

export default Color;
