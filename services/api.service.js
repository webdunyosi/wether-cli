// services/api.service.js
import axios from "axios"
import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js"

const getWeather = async (city) => {
  const token = process.env.TOKEN ?? (await getKeyValue(TOKEN_DICTIONARY.token))

  if (!token) {
    throw new Error("No token found!")
  }

  // 1. Obyekt destruktizatsiyasi orqali faqat "data" ni ajratib olamiz
  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: token,
        lang: "en",
        units: "metric",
      },
    },
  )

  console.log(data)

  return data
}

export { getWeather }
