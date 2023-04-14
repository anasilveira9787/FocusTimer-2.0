import { 
    buttonPlay,
    buttonStop,
    plusFiveMinutes,
    lessFiveMinutes,
    forestSoundButton,
    rainSoundButton,
    coffeshopSoundButton,
    fireplaceSoundButton
 } from "./elements.js"


export default function({controls,timer,sound,}) {

    buttonPlay.addEventListener('click', function() {    
        controls.play()
        timer.countdown()
        sound.pressButton()
    })
    
    buttonStop.addEventListener('click', function() {    
        controls.stop()
        timer.reset()
        sound.pressButton()    
    })

    plusFiveMinutes.addEventListener('click', function() {
        timer.plusFiveMinutes()
        sound.pressButton()   
    
    })

    lessFiveMinutes.addEventListener('click', function() {
        timer.lessFiveMinutes()
        sound.pressButton()   
    
    })
    
   
    forestSoundButton.addEventListener('click', function() { 
        if (forestSoundButton.classList.contains('active'))  {
            sound.stopForest()
            forestSoundButton.classList.remove('active')
            return
        } 
        forestSoundButton.classList.add('active')
        sound.playForest()

    })

    rainSoundButton.addEventListener('click', function() { 
        if (rainSoundButton.classList.contains('active'))  {
            sound.stopRain()
            rainSoundButton.classList.remove('active')
            return
        } 
        rainSoundButton.classList.add('active')
        sound.playRain()

    })

    coffeshopSoundButton.addEventListener('click', function() { 
        if (coffeshopSoundButton.classList.contains('active'))  {
            sound.stopCoffee()
            coffeshopSoundButton.classList.remove('active')
            return
        } 
        coffeshopSoundButton.classList.add('active')
        sound.playCoffee()

    })
    
    fireplaceSoundButton.addEventListener('click', function() { 
        if (fireplaceSoundButton.classList.contains('active'))  {
            sound.stopFire()
            fireplaceSoundButton.classList.remove('active')
            return
        } 
        fireplaceSoundButton.classList.add('active')
        sound.playFire()

    })

    
}