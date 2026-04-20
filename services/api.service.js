import https from "https"

const getWeather = async (city) => {
  // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

  const url = new URL("https://api.openweathermap.org/data/2.5/weather")
  url.searchParams.append('q', city)
  
  https.get()
}

export { getWeather }
