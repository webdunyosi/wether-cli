// services/log.service.js

import chalk from "chalk"
import dedent from "dedent-js"

// Xatoliklarni chiqaruvchi funksiya
const printError = (error) => {
  console.log(chalk.bgRed(`Error: ${error}`))
}

// Muvaffaqiyatli xabarlarni chiqaruvchi funksiya
const printSuccess = (message) => {
  console.log(chalk.bgGreen(`Success: ${message}`))
}

const printHelp = () => {
  console.log(dedent`
    ${chalk.bgCyan("HELP")}
    -s [CITY] - Shaharni saqlash
    -t [API_KEY] - Tokenni saqlash
    -h - Yordam oynasini ko'rsatish
  `)
}

const printWeather = (response, icon) => {
  console.log(dedent`
    ${chalk.bgBlue("WEATHER")} Shahar: ${response.name}
    ${icon}  ${response.weather[0].description}
    Temperatura: ${response.main.temp}°C (hisoblangan temperatura: ${response.main.feels_like}°C)
    Namlik: ${response.main.humidity}%
    Shamol tezligi: ${response.wind.speed} m/s
    Havo bosimi: ${response.main.pressure} hPa
  `);
  
}

// Boshqa fayllarda ishlatish uchun ularni eksport qilamiz
export { printError, printSuccess, printHelp, printWeather }
