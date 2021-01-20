(function(){//SCOPE
  
    const avenger={
        nombre:'Steve',
        clave:'Capitan America',
        poder:'Droga'
    }
    console.log(avenger.nombre);
    console.log(avenger.clave);
    console.log(avenger.poder);

    //se puede mejorar de la siguiente manera DESESTRUCTURANDOLO
  //  const {nombre, clave,poder}=avenger;//extrae todo los valores del arrego
  /*  console.log(nombre);
    console.log(clave);
    console.log(poder);*/

     //LA DESESTRUTURIZACION no importa el orden
     const {nombre, poder}=avenger;//ignorando la clave
     console.log("********************");
     console.log(nombre);
     console.log(poder);

     //LA DESESTRUTURIZACION tambien funciona en FUNCIONES ?
     const extraer =(avenger:any)=>{
        const {nombre,clave,poder}=avenger;
        console.log("********************");
        console.log(nombre);
        console.log(clave);
        console.log(poder);
     }//extraer
     extraer(avenger);
    
     //LA DESESTRUTURIZACION en funciones AHORA viene lo interesante jejeje
     //esta se dara en el argumento de la funcion
     const extraer1 =({nombre,clave,poder}:any)=>{
      //const {nombre,clave,poder}=avenger;
        console.log("#####################");
        console.log(nombre);
        console.log(clave);
        console.log(poder);
     }//extraer
     extraer1(avenger);

     //otro ejercicio
     const avengerS:String[]=['Thor','Ironman','Spiderman'];
     console.log("------------------------");    
     console.log(avengerS[0]);
     console.log(avengerS[1]);
     console.log(avengerS[2]);

    /*const[thor,ironman,spiderman]=avengerS;
     console.log("xxxxxxxxxxxxxxxxxxxxxxxx");    
     console.log(thor);
     console.log(ironman);
     console.log(spiderman);*/

     //si solo te interesa una posicion del arreglo
     const[,,spiderman]=avengerS;
     console.log("xxxxxxxxxxxxxxxxxxxxxxxx");    
     //console.log(thor);
     //console.log(ironman);
     console.log(spiderman);

  //LA DESESTRUTURIZACION tambien funciona en FUNCIONES ?
  const extraerArreglo =([thor, ironman,spiderman]:String[])=>{
      console.log("------------------------");
      console.log(thor);
      console.log(ironman);
      console.log(spiderman);
 }//extraer
 extraerArreglo(avengerS);



})();//SCOPE 