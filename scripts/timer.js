import Sounds from "./sounds.js"

export default function Timer({
    displayHours,
    displayMinutes,
    displayseconds,
    toggleDisplayPlayPause,

}){
    let timeTimerOut

    
    let hours = Number(displayHours.textContent)
    let minutes = Number(displayMinutes.textContent)
    
function updateDisplay(newHours, newMinutes, seconds){
    newHours = newHours === undefined ? hours : newHours
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    displayHours.textContent = String(newHours).padStart(2, '0')
    displayMinutes.textContent = String(newMinutes).padStart(2, '0')
    displayseconds.textContent = String(seconds).padStart(2, '0')
}

    function reset(){
        updateDisplay(hours, minutes, 0)
        hold()
    }

    function countdown(){
        timeTimerOut = setTimeout(function(){
            let minutes = Number(displayMinutes.textContent)
            let seconds = Number(displayseconds.textContent)
            hours = Number(displayHours.textContent)
            let timerEnd = seconds <= 0 && minutes <=0 && hours <=0
           updateDisplay(hours, 0, 0)
            if(timerEnd){
                toggleDisplayPlayPause()
                updateDisplay()
                Sounds().timeStop()
                return
            }
    
            if(seconds <= 0){
                seconds = 60
                --minutes
    
            }
             if(minutes <= 0 && hours > 0){
                    minutes = 59
                    --hours
                }
    
    
            updateDisplay(hours, minutes, seconds - 1)
            countdown()
        }, 1000)
    }

    function hold(){
        clearTimeout(timeTimerOut)
    }

    function plusTime(){
        minutes = Number(minutes)
         hours = Number(hours)
         minutes+= 1
          if(minutes >= 59 ){
            ++hours
            minutes = 0
         }
        
    }
    
    function minusTime(){
        hours = Number(hours)
        minutes = Number(minutes)
    
    
        if(minutes <= 0 && hours <= 0){
            alert('Opa! Já foi diminuído o máximo possível! :)')
            return
        }
        if(minutes <=0 && hours >= 0){
            --hours
            minutes= 60
        }
    
        minutes-=1
    }
    function updateMinutesAndHours(newHours, newMinutes){
        minutes = newMinutes
        hours = newHours
    }

    return{reset, updateDisplay, hold, countdown, plusTime, minusTime, updateMinutesAndHours}
}