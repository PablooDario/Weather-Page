//Parsear la Api del clima
let ApiClima=JSON.parse(ClimaJson);
console.log(typeof(ApiClima));

capitalize = str =>{return str.slice(0,1).toUpperCase() + str.slice(1,str.length).toLowerCase()};

let imagen={
    Soleado:"clear.png",
    'Mayormente soleado':"clear.png",
    Nublado:"clouds.png",
    'Parcialmente nublado':"clouds.png",
    Drizzle:"drizzle.png",
    Mist:"mist.png",
    Tormentas:"rain.png",
    'Tormentas dispersas':"storm.png",
    Snow:"snow.png"
}

buscar = () =>{
    let mun=document.querySelector("input").value
    mun=capitalize(mun)
    var index = ApiClima.findIndex(municipio => municipio.name === mun);
    if(index!=-1)
    {
        document.querySelector(".tmp").innerHTML=ApiClima[index].tempc + " °C"
        document.querySelector(".city").innerHTML=ApiClima[index].name + ", " + ApiClima[index].state
        document.querySelector(".precip").innerHTML=ApiClima[index].probabilityofprecip + "%"
        document.querySelector(".wind").innerHTML=ApiClima[index].windspeedkm + " km/h"
        let clima=ApiClima[index].skydescriptionlong
        let img="./img/" + imagen[clima]
        document.querySelector(".img-weather").src=img
    }
    else
    alert("El municipio a buscar es: error")
}

document.querySelector(".submit").addEventListener("click", buscar)



//Obtener el objeto que tenga el valor de "Asientos" en la propiedad "name"
var result = ApiClima.find(municipio => municipio.name === "Asientos");
console.log(result.state)