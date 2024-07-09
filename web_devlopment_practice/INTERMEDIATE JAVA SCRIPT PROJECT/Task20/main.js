// Foursquare API Info
//const clientId = '';
//const clientSecret = '';
const url = 'https://api.foursquare.com/v3/places/search';

// OpenWeather Info
//const openWeatherKey = '';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
const getVenues = async () => {
  const city = $input.val();
  const today = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const urlToFetch = `${url}?near=${city}&limit=20&client_id=${clientId}&client_secret=${clientSecret}&v=${today}`;

  try {
    const response = await fetch(urlToFetch, {
      headers: {
        'Authorization': `fsq3kC1W3mxDI/eZ2Rk9yxRG9Wo5b5lLtEMuirWhXo0RMfQ=`,
        'Accept': 'application/json'
      }
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse.results;
    }
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error);
  }
}

const getForecast = async () => {
  const city = $input.val();
  const urlToFetch = `${weatherUrl}?q=${city}&appid=${openWeatherKey}`;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error);
  }
}

// Render functions
const renderVenues = (venues) => {

  $venueDivs.forEach(($venue, index) => {
    console.log(venues[index]);
    if (venues[index]) {
      const venue = venues[index];
      const venueIcon = venue.categories[0].icon;
      const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;

      // Constructing the HTML content for each venue
      let venueContent = `
        <h2>${venue.name}</h2>
        <img class="venueimage" src="${venueImgSrc}" alt="${venue.name}">
        <p>${venue.location.address}</p>
        <p>${venue.location.locality}</p>
        <p>Latitude:${venue.geocodes.main.latitude}</p>
         <p>Logitude:${venue.geocodes.main.longitude}</p>
      `;

      // Append the constructed content to the venue div
      $venue.html(venueContent);
    } else {
      // If no venue exists at the current index, clear the content
      $venue.html('');
    }
  });

  // Append the destination city to the destination element
  if (venues[0]) {
    $destination.append(`<h2>${$input.val()} Information </h2>`);
  }
}

const renderForecast = (day) => {
  console.log(day);
  const weatherDescription = day.weather[0].description;
  const iconUrl = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
  const temperature = Math.round(day.main.temp - 273.15); // Convert temperature from Kelvin to Celsius
  const humidity = day.main.humidity;

  // Constructing the HTML content for the weather forecast
  let weatherContent = `
    <h2>Weather in ${day.name}</h2>
    <img src="${iconUrl}" alt="${weatherDescription}">
    <p>${weatherDescription}</p>
    <p>Temperature: ${temperature}°C</p>
    <p>Humidity: ${humidity}%</p>
  `;

  // Append the constructed content to the weather div


  
  $weatherDiv.html(weatherContent);
}

const executeSearch = async () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");

  const venues = await getVenues();
  const weather = await getForecast();

  renderVenues(venues);
  renderForecast(weather);

  return false;
}

$submit.click((event) => {
  event.preventDefault();
  executeSearch();
});
