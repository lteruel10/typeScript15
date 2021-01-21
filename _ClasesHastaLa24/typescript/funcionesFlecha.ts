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

    const sumarN=function(a:number,b:number){
        return a+b;
    }
    const sumarF=(a:number,b:number)=>(a+b);

    console.log(sumarN(2,2));
    console.log(sumarF(8,8));


    //veamos otra funcion
    const hulk ={
        nombre:'Hulk',
        smash(){
            setTimeout(() => {
                console.log(`${this.nombre} smash!!!`);
            }, 1000);

            setTimeout(() =>{
                console.log(`${this.nombre} smash!!!`);
            },2000);///2000 milisegundos
            //this sirve apra apunta al objeto 
        }
    }

    hulk.smash();


})();//SCOPE 