"use strict";
(function () {
    //function activar(quien:string,objeto:string  ){//obligatorios
    //function activar(quien:string,objeto:string='batisenal'  ){//objeto es opcional muy interesante
    function activar(quien, momento, objeto) {
        //ORDEN OBLIGATORIO OPCIONALES y por ultimo los que tienen VALORES POR DEFECTO      
        if (objeto === void 0) { objeto = 'batisenal'; }
        if (momento) {
            console.log(quien + " activo la " + objeto + " en la " + momento);
        }
        else {
            console.log(quien + " activo la " + objeto);
        }
    }
    activar('Luis', 'TRDE');
})(); //SCOPE //funcion auto invocado  ///PATRON MODULO
//CUANDO UTILIZAMOS LET LAS VARIABLES SOLO EXISTEN EN EL SCOPE...despues ya no exiisten
