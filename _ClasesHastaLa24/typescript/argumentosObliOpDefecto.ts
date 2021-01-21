(function(){//SCOPE
    //function activar(quien:string,objeto:string  ){//obligatorios
    //function activar(quien:string,objeto:string='batisenal'  ){//objeto es opcional muy interesante
    
    function activar(quien :string,
                    momento?:string,
                    objeto :string='batisenal' ){  //agregamos por defecto ()  
                                      //ORDEN OBLIGATORIO OPCIONALES y por ultimo los que tienen VALORES POR DEFECTO      
        
        if (momento){
            console.log(`${quien} activo la ${objeto} en la ${momento}`);
        }else {
            console.log(`${quien} activo la ${objeto}`);
        }                                     

    }
    activar('Luis','TRDE');

})();//SCOPE //funcion auto invocado  ///PATRON MODULO
//CUANDO UTILIZAMOS LET LAS VARIABLES SOLO EXISTEN EN EL SCOPE...despues ya no exiisten
