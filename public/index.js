const title = document.getElementById("title")
const submitBtn = document.getElementById('submit-btn')
const input = document.getElementById('input')
const summary = document.getElementById('summary')
const temperature = document.getElementById('temperature')

submitBtn.addEventListener('click', async ()=>{
    summary.textContent = "loading..."
    temperature.textContent =""
    let response = await fetch(`http://localhost:3000/weather?location=${input.value}`)
    let data = await response.json()
    
    summary.textContent =  data.summary
    temperature.textContent =  `${Math.floor((data.temperature-32)*(5/9))}°C`

})