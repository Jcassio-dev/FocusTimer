export default function Sounds(){
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const soundRain = new Audio('.././assets/sounds/Chuva.wav')
    const soundNature = new Audio(".././assets/sounds/Floresta.wav")
    const soundBonfire = new Audio(".././assets/sounds/Lareira.wav")
    const soundCoffeeShop = new Audio(".././assets/sounds/CoffeeLoFi.wav")
    const soundStop = new Audio(".././assets/sounds/stop.wav")

    soundRain.loop = true
    soundNature.loop = true
    soundBonfire.loop = true
    soundCoffeeShop.loop = true


    function pressButton(){
        buttonPressAudio.play()
    }

    function RainPlay(volume){
        soundNature.pause()
        soundCoffeeShop.pause()
        soundBonfire.pause()
        soundRain.play()
        soundRain.volume = volume
    }
    function BonfirePlay(volume){
        soundNature.pause()
        soundCoffeeShop.pause()
        soundBonfire.play()
        soundRain.pause()
        soundBonfire.volume = volume
    }
    function CoffeeShopPlay(volume){
        soundNature.pause()
        soundCoffeeShop.play()
        soundBonfire.pause()
        soundRain.pause()
        soundCoffeeShop.volume = volume
    }
    function NaturePlay(volume){
        soundNature.play()
        soundCoffeeShop.pause()
        soundBonfire.pause()
        soundRain.pause()
        soundNature.volume= volume
    }

    function timeStop(){
        soundStop.play()
        soundNature.pause()
        soundCoffeeShop.pause()
        soundBonfire.pause()
        soundRain.pause()
        soundStop.volume = 1

    }
    return{
        pressButton,
        BonfirePlay,
        CoffeeShopPlay,
        NaturePlay,
        RainPlay,
        timeStop
    }
}