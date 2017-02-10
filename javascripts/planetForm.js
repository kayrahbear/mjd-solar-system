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
