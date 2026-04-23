// index.js
import getArgs from "./helpers/args.js" // getArgs funksiyasini import qilamiz
import { getWeather } from "./services/api.service.js"
import { printError, printSuccess, printHelp } from "./services/log.service.js" // log xizmatidan funksiyalarni import qilamiz
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js"

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

const getForcast = async () => {
  const response = await getWeather(process.env.CITY ?? "Uzbekistan")
  console.log(response)
}

const startCLI = () => {
  const args = getArgs(process.argv)

  if (args.h) {
    printHelp()
  }

  if (args.s) {
    // save city (shaharni saqlash mantiqi yoziladi)
  }

  if (args.t) {
    return saveToken(args.t)
  }
  getForcast()
}
startCLI() // Funksiyani ishga tushiramiz
