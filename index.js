// index.js
import getArgs from "./helpers/args.js" // getArgs funksiyasini import qilamiz
import { getIcon, getWeather } from "./services/api.service.js"
import { printError, printSuccess, printHelp, printWeather } from "./services/log.service.js" // log xizmatidan funksiyalarni import qilamiz
import { getKeyValue, saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js"

const saveToken = async (token) => {
  if (!token.length) {
    printError("Token bo'sh bo'lishi mumkin emas!")
    return
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token)
    printSuccess("Token saqlandi!")
  } catch (error) {
    printError(error.message)
  }
}

const saveCity = async (city) => {
  if (!city.length) {
    printError("Shahar bo'sh bo'lishi mumkin emas!")
    return
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city)
    printSuccess("Shahar saqlandi!")
  } catch (error) {
    printError(error.message)
  }
}

const getForcast = async () => {
  try {
    const city = process.env.CITY ?? (await getKeyValue(TOKEN_DICTIONARY.city))
    const response = await getWeather(city)
    printWeather(response, getIcon(response.weather[0].icon))
  } catch (error) {
    if (error?.response?.status === 404) {
      printError("Shahar topilmadi!")
    } else if (error?.response?.status === 401) {
      printError("Token noto'g'ri!")
    } else {
      printError(error.message)
    }
  }
}

const startCLI = () => {
  const args = getArgs(process.argv)

  if (args.h) {
    return printHelp()
  }

  if (args.s) {
    return saveCity(args.s)
  }

  if (args.t) {
    return saveToken(args.t)
  }
  return getForcast()
}
startCLI() // Funksiyani ishga tushiramiz
