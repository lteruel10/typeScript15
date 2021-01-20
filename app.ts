(()=>{//SCOPE
    //interfases de typscript
    //**********SIN INTERFACE */
/*    
const enviarMision=(xmen:{nombre:string})=>{ //const enviarMisidon=(xmen:any)=>{ no es adecuada x any
    console.log(`Enviando a ${xmen.nombre} a la mision `)
}//enviar mision
const regresarAlCuartel=(xmen:{nombre:string})=>{
    console.log(`Regresando a ${xmen.nombre} de la mision `)
}//regresa mision
const wolverine={
    nombre: 'Logan',
    edad:60
}
enviarMision(wolverine);
regresarAlCuartel(wolverine); 
*/
//si tuvieramos que cambiar el elemento nombre por nombreXMen... habria que cambiarlo en todo el codigo
//a continuacion una solucion
//**********CREANDO UNA INTERFACE */ son formas de definir REGLAS
interface XMen {//reglas que cumple un objeto, al final viene siendo una clase
    nombre:string;
    edad:number;
    poder?:string;//el simbolo ? me dice que es opcional
}//iface

const enviarMision2=(xmen:XMen)=>{ 
    console.log(`Enviando a ${xmen.nombre} a la mision `)
}//enviar mision
const regresarAlCuartel2=(xmen:XMen)=>{
    console.log(`Regresando a ${xmen.nombre} de la mision `)
}//regresa mision
const wolverine2:XMen={///al agregar :XMen nos obliga a mantener el tipado
    nombre: 'Logan',
    edad:60
}
enviarMision2(wolverine2);
regresarAlCuartel2(wolverine2);


})();//SCOPE 