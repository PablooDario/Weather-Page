let objEjemplo={
    _id:1,
    cityid:1,
    validdateutc:2,
    winddirectioncardinal:"S",
    probabilityofprecip:"60",
    relativehumidity:"91",
    name:"Asientos",
    date_insert:"2017-06-27T17:36:43.088Z",
    longitude:"-102.0893",
    state:"Aguascalientes",
    lastreporttime:"20170627T092453Z",
    skydescriptionlong:"Tormentas dispersas",
    stateabbr:"AGU",
    tempc:15,
    latitude:"22.23832",
    iconcode:"96",
    windspeedkm:5
}

//Parsear la Api del clima
let ApiClima=JSON.parse(ClimaJson);
console.log(typeof(ApiClima));

//obtener su tamaño
let tam=ApiClima.lenght;
console.log(tam)

//Obtener el elemento 2 y su estado 
console.log(ApiClima[1]);
console.log(ApiClima[1].state);

//Obtener el elemento que tenga el valor de "Asientos" en la propiedad "name"
var result = ApiClima.find(item => item.name === "Asientos");
console.log(result.state)

//Obtener el indice que tenga el valor de "Asientos" en la propiedad "name"
var index = ApiClima.findIndex(item => item.name === "Asientos");
console.log(index)