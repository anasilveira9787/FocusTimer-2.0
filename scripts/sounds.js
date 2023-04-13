export default function() {

    const forestSound = new Audio("../src/Floresta.wav")
    const rainSound = new Audio("../src/Chuva.wav")
    const coffeshopSound = new Audio("../src/Cafeteria.wav")
    const fireplaceSound = new Audio("../src/Lareira.wav")

    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  
  
    function playForest() {
        forestSound.play()
    }

    function stopForest() {
        forestSound.pause()
    }
    
    function playRain() {
        rainSound.play()
    }

    function stopRain() {
        rainSound.pause()
    }

    function playCoffee() {
        coffeshopSound.play()
    }

    function stopCoffee() {
        coffeshopSound.pause()
    }

    function playFire() {
        fireplaceSound.play()
    }

    function stopFire() {
        fireplaceSound.pause()
    }



    function pressButton() {
        buttonPressAudio.play()
      }
    
      function timeEnd() {
        kitchenTimer.play()
      }
  
      
    return {
    playForest,
    stopForest,
    playRain,
    stopRain,
    playCoffee,
    stopCoffee,
    playFire,
    stopFire,
    pressButton,
    timeEnd
    }
  
  }

