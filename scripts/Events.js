import { elements } from "./elements.js"

const {
    btnLight,
    btnDark,
    btnConfig,
    btnPlay,
    btnPause,
    btnPlusTime,
    btnMinusTime,
    btnStop,
    themeBtnBonfire,
    themeBtnNature,
    themeBtnCoffeeShop,
    themeBtnRain,
    volBonfire,
    volCoffee,
    volRain,
    volNature

} = elements
export default function Events({
    control,
    timer,
    sound
}){
    let volumeBonfire = 0.5
    let volumeNature = 0.5
    let volumeRain = 0.5
    let volumeCoffee = 0.5 
    
    btnLight.addEventListener('click', () => {
        control.addDarkMode()
        sound.pressButton()
    
    })
    btnDark.addEventListener('click', () => {
        control.removeDarkMode()
        sound.pressButton()
    })
    
    btnConfig.addEventListener('click', () => {
        sound.pressButton()
        let newMinutes = control.getMinutes()
        let newHours = control.getHours()
        timer.updateDisplay(newHours, newMinutes)
        timer.updateMinutesAndHours(newHours, newMinutes)
        
    })
    
    btnPlay.addEventListener('click', () =>{

        control.toggleDisplayPlayPause()
        timer.countdown()   
        sound.pressButton()
    })
    btnPause.addEventListener('click', () =>{
        control.toggleDisplayPlayPause()
        timer.hold()
        sound.pressButton()
    })
    
    btnPlusTime.addEventListener('click', ()=>{
    timer.plusTime()
    timer.updateDisplay()
    })
    
    
    btnMinusTime.addEventListener('click', () => {
        timer.minusTime()
        timer.updateDisplay()
    })
    
    btnStop.addEventListener('click', ()=> {
        control.stop()
        timer.reset()
        sound.pressButton()
    })

    themeBtnBonfire.addEventListener('click', ()=>{
        control.putBonfireTheme()
        sound.BonfirePlay(volumeBonfire)
    })
    themeBtnNature.addEventListener('click', ()=>{
       control.putNatureTheme()
        sound.NaturePlay(volumeNature)
    })
    themeBtnRain.addEventListener('click', ()=>{
        control.putRainTheme()
        sound.RainPlay(volumeRain)
    })
    themeBtnCoffeeShop.addEventListener('click', ()=>{
        control.putCoffeeTheme()
        sound.CoffeeShopPlay(volumeCoffee)
    })
    
    volBonfire.addEventListener('input', e =>{
        volumeBonfire = parseFloat(e.target.value)
        console.log(volumeBonfire)
    })
    volCoffee.addEventListener('input', e =>{
        volumeCoffee = parseFloat(e.target.value)
    })
    volRain.addEventListener('input', e =>{
        volumeRain = parseFloat(e.target.value)
    })
    volNature.addEventListener('input', e =>{
        volumeNature = parseFloat(e.target.value)
    })
}