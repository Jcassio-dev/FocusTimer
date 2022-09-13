export default function Controls({
    btnPlay,
    btnPause,
    btnConfig,
    body,
    layoutButtonsTheme,
    btnLight,
    btnDark,
    btnPlusTime,
    btnMinusTime,
    themeBtnBonfire,
    themeBtnCoffeeShop,
    themeBtnNature,
    themeBtnRain,
    volBonfire,
    volCoffee,
    volRain,
    volNature

}){
    function stop(){
        btnPlay.classList.remove('hidden');
        btnPause.classList.add('hidden');
    }
    
    
    function getMinutes(){
        let newMinutes = Number(prompt('Digite quantos minutos: '))
        if(!newMinutes){
            return 0
        }
        return newMinutes
    }
    function getHours(){
        let newHours = Number(prompt('Digite quantas horas precisa: '))
        if(!newHours){
            return 0
        }
        return newHours
    }
    
    
    function toggleDisplayPlayPause(){
        btnPlay.classList.toggle('hidden');
        btnPause.classList.toggle('hidden');

    }
    
    
    function toggleDisplayLightDark(){
        btnLight.classList.toggle('hidden')
        btnDark.classList.toggle('hidden')
    }
    
    function addDarkMode(){
        body.classList.add('dark')
        layoutButtonsTheme.classList.add('dark')

        toggleDisplayLightDark()
    }
    
    
    function removeDarkMode(){
        body.classList.remove('dark')
        layoutButtonsTheme.classList.remove('dark')

        toggleDisplayLightDark()
    }
    function putCoffeeTheme(){
        themeBtnCoffeeShop.classList.add('focus')
        themeBtnNature.classList.remove('focus')
        themeBtnRain.classList.remove('focus')
        themeBtnBonfire.classList.remove('focus')
        
        body.classList.add('BgCoffee')
        body.classList.remove('BgNature')
        body.classList.remove('BgRain')
        body.classList.remove('BgBonfire')

        volBonfire.classList.add('hidden')
        volCoffee.classList.remove('hidden')
        volRain.classList.add('hidden')
        volNature.classList.add('hidden')
    }
    function putNatureTheme(){
        themeBtnCoffeeShop.classList.remove('focus')
        themeBtnNature.classList.add('focus')
        themeBtnRain.classList.remove('focus')
        themeBtnBonfire.classList.remove('focus')

        body.classList.remove('BgCoffee')
        body.classList.add('BgNature')
        body.classList.remove('BgRain')
        body.classList.remove('BgBonfire')

        volBonfire.classList.add('hidden')
        volCoffee.classList.add('hidden')
        volRain.classList.add('hidden')
        volNature.classList.remove('hidden')
    }
    function putRainTheme(){
        themeBtnCoffeeShop.classList.remove('focus')
        themeBtnNature.classList.remove('focus')
        themeBtnRain.classList.add('focus')
        themeBtnBonfire.classList.remove('focus')

        body.classList.remove('BgCoffee')
        body.classList.remove('BgNature')
        body.classList.add('BgRain')
        body.classList.remove('BgBonfire')

        volBonfire.classList.add('hidden')
        volCoffee.classList.add('hidden')
        volRain.classList.remove('hidden')
        volNature.classList.add('hidden')
    }
    function putBonfireTheme(){
        themeBtnCoffeeShop.classList.remove('focus')
        themeBtnNature.classList.remove('focus')
        themeBtnRain.classList.remove('focus')
        themeBtnBonfire.classList.add('focus')

        body.classList.remove('BgCoffee')
        body.classList.remove('BgNature')
        body.classList.remove('BgRain')
        body.classList.add('BgBonfire')

        volBonfire.classList.remove('hidden')
        volCoffee.classList.add('hidden')
        volRain.classList.add('hidden')
        volNature.classList.add('hidden')
    }
    return{stop, getMinutes, getHours, toggleDisplayPlayPause, addDarkMode, removeDarkMode, putBonfireTheme, putCoffeeTheme, putNatureTheme, putRainTheme}
}