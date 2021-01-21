(function(){//SCOPE
    

let mensaje:string= 'Hola';
let numero:number =123;
let booleano:boolean=true;//false
let hoy:Date = new Date();//DAte es una fucnion constructura o clase

let cualquierCosa;//deveriamos de evitar este tipo ANY
cualquierCosa=mensaje;
cualquierCosa=numero;
cualquierCosa=booleano;
cualquierCosa=hoy;


let cualquierCosa2:string | number |Date;//deveriamos de evitar este tipo ANY
cualquierCosa2=mensaje;
cualquierCosa2=numero;
//cualquierCosa2=booleano;  //aqui da un error xq no esta dentro de los timpos definidos en let
cualquierCosa2=hoy;

let spiderman ={
    nombre:'spiderman',
    edad:30
};
spiderman={
    nombre:'juan',
    edad:40
}

})();//SCOPE //funcion auto invocado  ///PATRON MODULO
//CUANDO UTILIZAMOS LET LAS VARIABLES SOLO EXISTEN EN EL SCOPE...despues ya no exiisten
