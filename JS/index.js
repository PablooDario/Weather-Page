//Parsear la Api del clima
let ApiClima=JSON.parse(ClimaJson);
console.log(typeof(ApiClima));

capitalize = str =>{return str.slice(0,1).toUpperCase() + str.slice(1,str.length).toLowerCase()};

error404= ()=>{Swal.fire({
        icon: 'error',
        title: 'Municipio Inexistente',
        text: '¿Te has preguntado cual es el clima en la luna?',
        footer: 'Prueba otro municipio'
    });
  }

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
        document.querySelector(".meteor").style.display="none";
        const icono = document.querySelector(".met");
        if(icono!=null)
        {
            icono.className = " ";
            icono.classList.add("fa-solid", "fa-cloud-showers-heavy", "fa-2xl", "item", "cloud");
        }
    }
    else
    {
        error404()
        //alert("El municipio no existe")
        document.querySelector(".meteor").style.display="block";
        document.querySelector(".tmp").innerHTML="-180°C"
        document.querySelector(".city").innerHTML="La Luna, Espacio"
        document.querySelector(".precip").innerHTML="35%"
        document.querySelector(".wind").innerHTML="7000km/h"
        let img=document.querySelector(".img-weather")
        img.src="./img/Moon.png"
        img.style.height="180px";
        img.style.width="180px";
        document.querySelector(".imagen").style.position="relative";
        document.querySelector(".imagen").style.top="10px";
        document.querySelector(".principal").style.top="0px";
        const icono = document.querySelector(".cloud");
        icono.className = " ";
        icono.classList.add("fa-solid", "fa-meteor", "fa-shake", "fa-2xl", "item", "met");
    }
    document.querySelector(".container").style.height="550px";
    document.querySelector(".weather").style.display="block"
}

document.querySelector(".submit").addEventListener("click", buscar)

document.addEventListener("keypress", (event)=>{
    if(document.querySelector("input").value.length>0 && event.key==="Enter")
        buscar()
})

//Obtener el objeto que tenga el valor de "Asientos" en la propiedad "name"
var result = ApiClima.find(municipio => municipio.name === "Asientos");
console.log(result.state)