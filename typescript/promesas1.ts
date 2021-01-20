(()=>{//SCOPE
  
//PROMESAS INTRODUCCION
console.log(  'inicio');

const prom1=new Promise((resolve,reject)=>{  //resolve es lo que retorna cuando funciona bien
                                                //   reject cuando no funciona o da error
     setTimeout (()=>{
       // resolve('Se termino el timeOut');
         reject('Se termino el timeOut');
     },1000);
})//prom1                                        

prom1
    .then(mensaje =>console.log(mensaje) )
    .catch(err=>console.warn(err));
console.log('Fin');


})();//SCOPE 