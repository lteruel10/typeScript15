"use strict";
(() => {
    const enviarMision2 = (xmen) => {
        console.log(`Enviando a ${xmen.nombre} a la mision `);
    }; //enviar mision
    const regresarAlCuartel2 = (xmen) => {
        console.log(`Regresando a ${xmen.nombre} de la mision `);
    }; //regresa mision
    const wolverine2 = {
        nombre: 'Logan',
        edad: 60
    };
    enviarMision2(wolverine2);
    regresarAlCuartel2(wolverine2);
})(); //SCOPE 
