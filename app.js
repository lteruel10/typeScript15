"use strict";
(() => {
    //clases aspercion de algo de la vida real
    //metodos // son las acciones que uede hacer el objeto
    //herencia **LA CLASE1 le herede todas sus PROPIEDADES A OTRA CLASE puede ser CLASE 2
    class Avenger {
        constructor() {
            ///propiedades
            this.nombre = 'Sin Nombre';
        }
    }
    const antman = new Avenger();
    console.log(antman);
})(); //SCOPE 
