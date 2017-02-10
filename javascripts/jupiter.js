"use strict";

let formy = require("./planetForm.js");

function cupcake(domElement, planetInfo) {
    let output = formy.fillMeOut(planetInfo);
    formy.appendTo(domElement, output);
}



module.exports = {cupcake};
