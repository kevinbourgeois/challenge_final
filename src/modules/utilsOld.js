const INTERVALLE = 10;

var convert = require('color-convert');


function generePalette(hex) {

    const hsl = convert.hex.hsl(hex);

    const res = [];

    for (let i = 0; i <= 100; i+=INTERVALLE) {
        const tab = [];
        tab.push(hsl[0], hsl[1], i);
        res.push(tab);
    }
    return res;
}

function genereOmbre(hex) {

    const hsl = convert.hex.hsl(hex);

    return `${hsl[0]}deg ${hsl[1]}% ${hsl[2]}%`;

}

function isHex(input) {
    const regex = '/[0-9A-Fa-f]{6}/g;\n';
    let res = false;

    if (input.length === 7) {
        if (input.charAt(0) === "#") {
            res = /^[0-9a-fA-F]+$/.test(input.substring(1));
        }
    }

    return res;
}

export {generePalette, isHex,genereOmbre };
