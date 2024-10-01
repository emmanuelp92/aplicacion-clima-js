let api_key = '50b9885f514c7816db288761723d6bb2'
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'

document.getElementById('botonBusqueda').addEventListener('click', () => {
    let ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad){
        fetchDatosClima(ciudad)
    }
} )

const fetchDatosClima = ciudad => {
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(response => response.json())
    .then(response => mostrarDatosClima(response))
}

const mostrarDatosClima = response => {
    const divDatosClima = document.getElementById('datosClima') 
    divDatosClima.innerHTML = ''

    const ciudadNombre = response.name
    const paisNombre = response.sys.country
    const ciudadTemp = response.main.temp
    const humedad = response.main.humidity
    const ciudadDescripcion = response.weather[0].description
    const icono = response.weather[0].icon

    const tituloCiudad = document.createElement('h2')
    tituloCiudad.textContent = `${ciudadNombre}, ${paisNombre}`
    const tempCiudad = document.createElement('p')
    tempCiudad.textContent = `La termperatura es: ${Math.floor(ciudadTemp - 273.15)}°C`
    const humedadCiudad = document.createElement('p')
    humedadCiudad.textContent = `La humedad es: ${humedad}%`
    const iconoInfo = document.createElement('img')
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}.png`
    const descripcionCiudad = document.createElement('p')
    descripcionCiudad.textContent = `La descripción metereológica es: ${ciudadDescripcion}`

    divDatosClima.appendChild(tituloCiudad)
    divDatosClima.appendChild(tempCiudad)
    divDatosClima.appendChild(humedadCiudad)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descripcionCiudad)

}


