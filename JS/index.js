//Parsear la Api del clima
let ApiClima=JSON.parse(ClimaJson);
console.log(typeof(ApiClima));

capitalize = str =>{return str.slice(0,1).toUpperCase() + str.slice(1,str.length).toLowerCase()};

let imagen={
    clear:"clear.png",
    clouds:"clouds.png",
    drizzle:"drizzle.png",
    mist:"mist.png",
    rain:"rain.png",
    snow:"snow.png"
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
        let clima=ApiClima[index].probabilityofprecip
        if(clima>60)
            document.querySelector("img").innerHTML="./img"+
    }
    else
    alert("El municipio a buscar es: error")
}

document.querySelector(".submit").addEventListener("click", buscar)

var result = ApiClima.find(municipio => municipio.name === "Asientos");
console.log(result.state)

//Obtener el indice que tenga el valor de "Asientos" en la propiedad "name"

//console.log(index)