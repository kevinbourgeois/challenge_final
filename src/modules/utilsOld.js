const INTERVALLE = 10;
//import * as convert from "color-convert";
var convert = require('color-convert');


function generePalette(hex) {

    const hsl = convert.hex.hsl(hex);

    console.log(convert.hex.hsl("#DEADBF"));
    const res = [];

    for (let i = 0; i <= 100; i+=INTERVALLE) {
        const tab = [];
        tab.push(hsl[1], hsl[2], i);
        res.push(tab);
    }

    return res;
}

export {generePalette};
