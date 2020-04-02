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
      code = 'Paris'
      break;
    case 'Germany':
      code = 'Berlin'
      break;
    case 'India':
      code = 'India'
      break;
    case 'Italy':
      code = 'Rome'
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
      code = 'London'
      break;
    case 'United_States':
      code = 'Washington'
      break;
  }

  $.ajax({
    method: 'GET',
    url: `http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=75b5b831f17bbb45ab72d5b025e69e5f`,
    success: (data) => {
      console.log(data)
      $('#newslist').hide()
      $('#seenews').show()
      
      // <<---- weather ---->>
      $('#seeWeather').append(`
        <tr>
          <td>Country: ${data.name}</td>
          <td>Weather: ${data.weather[0].description}</td>
          <td>Temperature: ${(data.main.temp - 273).toFixed(0)}</td>
          <td>Humidity: ${data.main.humidity}</td>
        </tr>
      `)
    }
  })
}