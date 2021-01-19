(function(){//SCOPE
    //funcion tradicional
   const mifuncion=function(a:string){//funcion asignada a una variable puede ser LET
       return a.toUpperCase();
   }
    //funcion de flecha
   const mifuncionF=(a:string)=> {
       return a.toUpperCase();
   }
    //cuando solo tiene una liena de codigo quedaria asi... y alli es el beneficio de la flecha
    const mifuncionF2=(a:string)=>a.toUpperCase();

    console.log(mifuncion('Normal'));
    console.log(mifuncionF('Flecha con {}'));
    console.log(mifuncionF2('Flecha'));
})();//SCOPE 