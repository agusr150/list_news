const seeWeather = (country) => {
  switch (country) {
    case 'Indonesia':
      code = 'Jakarta'
      break;
    case 'Australia':
      code = 'Sydney'
      break;
    case 'China':
      code = 'Beijing'
      break;
    case 'France':
      code = 'France'
      break;
    case 'Germany':
      code = 'Berlin'
      break;
    case 'India':
      code = 'India'
      break;
    case 'Italy':
      code = 'Italy'
      break;
    case 'Japan':
      code = 'Tokyo'
      break;
    case 'Malaysia':
      code = 'Malaysia'
      break;
    case 'Netherland':
      code = 'Amsterdam'
      break;
    case 'Singapore':
      code = 'Singapore'
      break;
    case 'United_Kingdom':
      code = 'England'
      break;
    case 'United_States':
      code = 'Washington'
      break;
  }

  $.ajax({
    method: 'GET',
    url: `http://api.openweathermap.org/data/2.5/weather?q=${code}&appid=75b5b831f17bbb45ab72d5b025e69e5f`,
    success: (data) => {
      console.log(data)
      $('#newslist').hide()
      $('#seenews').show()
      
      // <<---- weather ---->>
      $('#seeWeather').append(`
        <div id="data">
          <div id="country">
            <td>Location: ${data.name} 📍</td>
          </div>
          <div id="weather">
            <td>Weather: ${data.weather[0].description} &#x1F324</td>          
          </div>
          <div id="temperature">
            <td>Temperature: ${(data.main.temp - 273).toFixed(0)} &#8451 &#x1F321</td>    
          </div>
          <div id="humidity">
            <td>Humidity: ${data.main.humidity} 💧</td>
          </div>
          <div id="wind">
            <td>Wind Speed: ${data.wind.speed} Kn 💨</td>
          </div>
        </div>
      `)
    }
  })
}