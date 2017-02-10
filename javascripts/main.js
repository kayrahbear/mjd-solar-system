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
