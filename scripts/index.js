import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"

import {
    minutesDisplay,
    secondsDisplay,
    buttonPlay,
    buttonStop,
    plusFiveMinutes,
    lessFiveMinutes
    } from "./elements.js"

const controls = Controls({
    buttonPlay,
    buttonStop,
    plusFiveMinutes,
    lessFiveMinutes
})

const timer = Timer({
    minutesDisplay, 
    secondsDisplay
})

const sound = Sound()


Events ({controls, timer, sound})