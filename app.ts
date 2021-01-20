(()=>{//SCOPE
//clases aspercion de algo de la vida real
//metodos // son las acciones que uede hacer el objeto
//herencia **LA CLASE1 le herede todas sus PROPIEDADES A OTRA CLASE puede ser CLASE 2

    class Avenger{//las clases siempre empiezan con letra capital
        
        ///propiedades
        nombre:string='Sin Nombre';
        equipo:string;
        nombreReal:string;
        poderPelear:boolean;
        peleasGanadas:number;
    }
    const antman=new Avenger();
    console.log(antman);


})();//SCOPE 