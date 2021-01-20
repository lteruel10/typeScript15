(()=>{//SCOPE
    //funcion retiar dinero
    const restirarDinero= (montoREtirar:number):Promise <number>=>{  
        let dineroActual=1000;
        return new Promise((resolve,reject) =>{
            if (montoREtirar>dineroActual){
                reject('No hay fondos suficientes');
            }else {
                dineroActual-=montoREtirar;
                resolve(dineroActual);
            }
        });

    }//  retirar dinero
    
                   
    restirarDinero(1500)
        .then(montoActual=>console.log(`Me queda ${montoActual}`))
        //.catch(err=>console.warn(err))      ///se puede reducir
        .catch(console.warn)         
  



})();//SCOPE 