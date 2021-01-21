"use strict";
(() => {
    //clases aspercion de algo de la vida real
    //metodos // son las acciones que uede hacer el objeto
    //herencia **LA CLASE1 le herede todas sus PROPIEDADES A OTRA CLASE puede ser CLASE 2
    /*
        class Avenger{//las clases siempre empiezan con letra capital
            ///propiedades
            nombre:string='Sin Nombre';
            equipo:string;
            nombreReal:string;
            poderPelear:boolean;
            peleasGanadas?:number;
            
            //BOB
            constructor(nombre:string, equipo:string, nombreReal:string,poderPelear:boolean,
                peleasGanadas:number){
                this.nombre=nombre;
                this.equipo=equipo;
                this.nombreReal=nombreReal;
                this.poderPelear=poderPelear;
                this.peleasGanadas=peleasGanadas;
            }
      */
    class Avenger {
        ///propiedades
        /*   nombre:string='Sin Nombre';
           equipo:string;
           nombreReal:string;
           poderPelear:boolean;
           peleasGanadas?:number;
         */
        //BOB
        constructor(nombre, equipo, nombreReal, poderPelear, peleasGanadas = 0) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.poderPelear = poderPelear;
            this.peleasGanadas = peleasGanadas;
        }
    }
    const antman = new Avenger('antman', 'capi');
    console.log(antman);
})(); //SCOPE 
