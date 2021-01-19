(function(){//SCOPE
function getEdad(){
    return 100+100+300;
}

    const nombre='Fernando';
    const apellido='Teruel';
    const edad=49;

    //const salida=nombre+apellido+edad; /// veamos una mejor forma de hacerlo
    ///const salida=nombre+" " +apellido+" ("+edad+")";//tampoco
    //mejor utilizr TEMPLATES LITERALES
   
   // const salida=`${nombre} \n${apellido} \n${edad}`;// ``se llama back tips o algo asi
   //ahora mejorada la linea anterior
    const salida= `
    ${ nombre }
    ${ apellido }
    (${getEdad()})`;//(${ edad+100})`;
   
    console.log(salida);


})();//SCOPE //funcion auto invocado  ///PATRON MODULO
//CUANDO UTILIZAMOS LET LAS VARIABLES SOLO EXISTEN EN EL SCOPE...despues ya no exiisten
