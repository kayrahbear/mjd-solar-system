(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let formy = require("./planetForm.js");

function cupcake(domElement, planetInfo) {
    let output = formy.fillMeOut(planetInfo);
    formy.appendTo(domElement, output);
}



module.exports = {cupcake};

},{"./planetForm.js":7}],2:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"./planetForm.js":7,"dup":1}],3:[function(require,module,exports){
"use strict";

// grab the planet js files
let Mercury = require('./mercury.js'),
    Venus = require('./venus.js'),
    Earth = require('./earth.js'),
    Mars = require('./mars.js'),
    Jupiter = require('./jupiter.js'),
    Saturn = require('./saturn.js'),
    Uranus = require('./uranus.js'),
    Neptune = require('./neptune.js');

var planetsArray = [];
var row1 = $("#row1"),
    row2 = $("#row2"),
    row3 = $("#row3"),
    row4 = $("#row4");


$.ajax({
        url: '../json/planets.json'
    }).done(function(planetData){
        planetsArray = planetData;
        Mercury.cupcake(row1, planetsArray[0]);
    }).then(function(planetData){
        Venus.cupcake(row1, planetsArray[1]);
    }).then(function(planetData){
        Earth.cupcake(row2, planetsArray[2]);
    }).then(function(planetData){
        Mars.cupcake(row2, planetsArray[3]);
    }).then(function(planetData){
        Jupiter.cupcake(row3, planetsArray[4]);
    }).then(function(planetData){
        Saturn.cupcake(row3, planetsArray[5]);
    }).then(function(planetData){
        Uranus.cupcake(row4, planetsArray[6]);
    }).then(function(planetData){
        Neptune.cupcake(row4, planetsArray[7]);
    });

},{"./earth.js":1,"./jupiter.js":2,"./mars.js":4,"./mercury.js":5,"./neptune.js":6,"./saturn.js":8,"./uranus.js":9,"./venus.js":10}],4:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"./planetForm.js":7,"dup":1}],5:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"./planetForm.js":7,"dup":1}],6:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"./planetForm.js":7,"dup":1}],7:[function(require,module,exports){
"use strict";

function fillMeOut(planetData) {
            let outputMe =
                `<div class="col-md-6 planet" id="${planetData.Name}">

                        <h3>
                            Planet Name: ${planetData.Name}
                        </h3>
                            <img src="/images/${planetData.Image}">
                        <ul>
                        <li>
                            <strong>Named After:</strong> ${planetData.Named}
                        </li>
                        <li>
                            <strong>Distance From The Sun:</strong> ${planetData.DFTS}
                        </li>
                        <li>
                            <strong>Orbit Period:</strong> ${planetData.Orbit_Period}
                        </li>
                        <li>
                            <strong>Diameter:</strong> ${planetData.Diameter}
                        </li>
                        <li>
                            <strong>Discovered:</strong> ${planetData.Discovered}
                        </li>
                        <li>
                            <strong>Mass:</strong> ${planetData.Mass}
                        </li>
                        <li>
                            <strong>Pressure:</strong> ${planetData.Pressure}
                        </li>
                        <li>
                            <strong>Atmospheric Comp:</strong> ${planetData.Atomsphere_Comp}
                        </li>
                        <li>
                            <strong>Orbiting Bodies:</strong> ${planetData.Satellites}
                        </li>
                        <li>
                            <strong>Visited By:</strong> ${planetData.Visited}
                        </li>
                        <li>
                            <strong>Day Duration:</strong> ${planetData.Day}
                        </li>
                    </ul>
                <div>`;
    return outputMe;
}

function appendTo(domElement, planetForm) {
    domElement.append(planetForm);
}


module.exports = {fillMeOut, appendTo};

},{}],8:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"./planetForm.js":7,"dup":1}],9:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"./planetForm.js":7,"dup":1}],10:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"./planetForm.js":7,"dup":1}]},{},[3]);
