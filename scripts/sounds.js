export default function Sounds(){
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const soundRain = new Audio("https://github.com/Jcassio-dev/FocusTimer/blob/main/assets/sounds/CoffeeLoFi.wav?raw=true")
    const soundNature = new Audio("https://github.com/Jcassio-dev/FocusTimer/blob/main/assets/sounds/Floresta.wav?raw=true")
    const soundBonfire = new Audio("https://github.com/Jcassio-dev/FocusTimer/blob/main/assets/sounds/Lareira.wav?raw=true")
    const soundCoffeeShop = new Audio("https://github.com/Jcassio-dev/FocusTimer/blob/main/assets/sounds/CoffeeLoFi.wav?raw=true")
    const soundStop = new Audio("https://github.com/Jcassio-dev/FocusTimer/blob/main/assets/sounds/stop.wav?raw=true")

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
