import { elements } from "./elements.js"
import Timer from "./timer.js"
import Controls from "./controls.js"
import Events from "./Events.js"
import Sounds from "./sounds.js"

const {
    btnPlay,
    btnPause,
    btnLight,
    btnDark,
    displayHours,
    displayMinutes,
    displayseconds,
    btnConfig,
    btnMinusTime,
    btnPlusTime,
    body,
    layoutButtonsTheme,
    themeBtnBonfire,
    themeBtnCoffeeShop,
    themeBtnNature,
    themeBtnRain,
    volBonfire,
    volCoffee,
    volRain,
    volNature
} = elements


const control = Controls({
    btnPlay,
    btnPause,
    body,
    layoutButtonsTheme,
    btnLight,
    btnDark,
    btnConfig,
    btnMinusTime,
    btnPlusTime,
    themeBtnBonfire,
    themeBtnCoffeeShop,
    themeBtnNature,
    themeBtnRain,
    volBonfire,
    volCoffee,
    volRain,
    volNature
})

const timer = Timer({
    displayHours,
    displayMinutes,
    displayseconds,
    toggleDisplayPlayPause: control.toggleDisplayPlayPause
})

const sound = Sounds()

Events({control, timer, sound})


