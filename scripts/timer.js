import Sounds from "./sounds.js"


export default function Timer({
    minutesDisplay, 
    secondsDisplay
    }) {

        let timerTimeOut
        let minutes = Number(minutesDisplay.textContent)

    function updateDisplay(newMinutes, seconds) {



        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }
    
    function reset() {
        updateDisplay(25, 0)
        clearTimeout(timerTimeOut)
    }
    
    function countdown(){
        timerTimeOut = setTimeout(function() {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
            let isFinished = minutes <= 0 && seconds <= 0
    
            updateDisplay(minutes, 0)
    
            if (isFinished) {
                reset()
                updateDisplay()
                Sounds().timeEnd()          
                return
            } 
            
    
            if(seconds <= 0 ) {
                seconds = 5
                --minutes
            }

   
            updateDisplay(minutes, String(seconds - 1))
    
            countdown()
        }, 1000)
    }

    function plusFiveMinutes() {
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)
        updateDisplay(minutes + 5, seconds)
    }

    function lessFiveMinutes() {
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)
        updateDisplay(minutes - 5, seconds)
    }


    return {
        countdown,
        reset,
        updateDisplay,
        plusFiveMinutes,
        lessFiveMinutes
    }

}

