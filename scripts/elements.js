const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')
const btnPlusTime = document.querySelector('.plus')
const btnMinusTime = document.querySelector('.minus')
const btnConfig = document.querySelector('.config')

const themeBtnNature = document.querySelector('.nature')
const themeBtnBonfire = document.querySelector('.bonfire')
const themeBtnCoffeeShop = document.querySelector('.coffeeShop')
const themeBtnRain = document.querySelector('.rain')

const volNature = document.querySelector('.nature input')
const volBonfire=document.querySelector('.bonfire input')
const volCoffee=document.querySelector('.coffeeShop input')
const volRain =document.querySelector('.rain input')

const displayHours = document.querySelector('.hours')
const displayMinutes = document.querySelector('.minutes')
const displayseconds = document.querySelector('.seconds')


const btnLight = document.querySelector('.light')
const btnDark = document.querySelector('.darkBtn')


const body = document.querySelector('body')
const layoutButtonsTheme = document.querySelector('.themeButtons')


export const elements = {
    btnPlay,
    btnPause,
    btnStop,
    btnPlusTime,
    btnMinusTime,
    btnConfig,
    btnLight,
    btnDark,
    displayHours,
    displayMinutes,
    displayseconds,
    body,
    layoutButtonsTheme,
    themeBtnBonfire,
    themeBtnCoffeeShop,
    themeBtnNature,
    themeBtnRain,
    volBonfire,
    volCoffee,
    volNature,
    volRain
}