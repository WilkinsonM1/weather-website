const title = document.getElementById("title")
const cBtn = document.getElementById('c-btn')
const fBtn = document.getElementById('f-btn')
const input = document.getElementById('input')
const summary = document.getElementById('summary')
const temperature = document.getElementById('temperature')
const place = document.getElementById('place')
const rain = document.getElementById('rain-prob')


cBtn.addEventListener('click', async ()=>{
    summary.textContent = "loading..."
    temperature.textContent =""
    let response = await fetch(`http://localhost:3000/weather?location=${input.value}`)
    let data = await response.json()
    console.log(data.weatherData)
    
    place.textContent = data.placeData
    summary.textContent =  data.weatherData.summary
    temperature.textContent =  `${Math.floor((data.weatherData.temperature-32)*(5/9))}°C`
    rain.textContent = `Chance of Rain: ${data.weatherData.precipProbability*100}%`
    

})

fBtn.addEventListener('click', async ()=>{
    summary.textContent = "loading..."
    temperature.textContent =""
    let response = await fetch(`http://localhost:3000/weather?location=${input.value}`)
    let data = await response.json()
    console.log(data.weatherData)
    
    place.textContent = data.placeData
    summary.textContent =  data.weatherData.summary
    temperature.textContent =  `${Math.floor(data.weatherData.temperature)}°F`
    rain.textContent = `Chance of Rain: ${data.weatherData.precipProbability*100}%`
    

})

window.addEventListener('keypress', async ()=>{
    if(event.which == "13"){
        summary.textContent = "loading..."
        temperature.textContent =""
        let response = await fetch(`http://localhost:3000/weather?location=${input.value}`)
        let data = await response.json()
        console.log(data.placeData)
        
        place.textContent = data.placeData
        summary.textContent =  data.weatherData.summary
        temperature.textContent =  `${Math.floor((data.weatherData.temperature-32)*(5/9))}°C`
        rain.textContent = `Chance of Rain: ${data.weatherData.precipProbability*100}%`
   }
    })
    window.addEventListener('keypress', async ()=>{
        if(event.which == "32"){
            summary.textContent = "loading..."
            temperature.textContent =""
            let response = await fetch(`http://localhost:3000/weather?location=${input.value}`)
            let data = await response.json()
            console.log(data.placeData)
            
            place.textContent = data.placeData
            summary.textContent =  data.weatherData.summary
            temperature.textContent =  `${Math.floor(data.weatherData.temperature)}°F`
            rain.textContent = `Chance of Rain: ${data.weatherData.precipProbability*100}%`
       }
        })
