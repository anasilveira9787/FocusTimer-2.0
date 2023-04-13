export default function({
    buttonPlay,
    buttonStop
}){
    

    function play() {
        buttonPlay.classList.add('active')
        buttonStop.classList.remove('active')
    }

    function stop() {
        buttonStop.classList.add('active')
        buttonPlay.classList.remove('active')
    }

    return {
        play,
        stop
    }
}

