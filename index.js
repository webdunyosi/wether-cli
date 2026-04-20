// index.js
import getArgs from "./helpers/args.js" // getArgs funksiyasini import qilamiz
import { printError, printSuccess, printHelp } from "./services/log.service.js" // log xizmatidan funksiyalarni import qilamiz
import { saveKeyValue } from "./services/storage.service.js"

const saveToken = async (token) => {
  if (!token.length) {
    printError("Token bo'sh bo'lishi mumkin emas!")
    return
  }
  try {
    await saveKeyValue("token", token)
    printSuccess("Token saqlandi!")
  } catch (error) {
    printError(error.message)
  }
}

const startCLI = () => {
  const args = getArgs(process.argv)
  console.log(args)

  if (args.h) {
    printHelp()
  }

  if (args.s) {
    // save city (shaharni saqlash mantiqi yoziladi)
  }

  if (args.t) {
    return saveToken(args.t)
  }
  // result (ob-havo natijasini ko'rsatish)
}
startCLI() // Funksiyani ishga tushiramiz