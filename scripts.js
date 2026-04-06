const startButton = document.querySelector('.start')
const pauseButton = document.querySelector('.pause')
const resetButton = document.querySelector('.reset')
const h1 = document.querySelector('h1')
let number = 0
let cron

function updateDisplay() {
    const minutes = Math.floor(number / 60)
    const seconds = number % 60
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds

    h1.innerHTML = `${formattedMinutes}:${formattedSeconds}`
    number++
}

function start() {
    if (!cron) {
        updateDisplay()
        cron = setInterval(() => {
            updateDisplay()
        }, 1000);
    }

    startButton.style.backgroundColor = '#31580a'
    pauseButton.style.backgroundColor = '#FF0000'
    resetButton.style.backgroundColor = 'gray'
}

function pause() {
    clearInterval(cron)
    cron = null

    startButton.style.backgroundColor = '#7FFF00'
    pauseButton.style.backgroundColor = '#801111'
    resetButton.style.backgroundColor = 'gray'
}

function reset() {
    clearInterval(cron)
    cron = null
    h1.innerHTML = '00:00'
    number = 0
    
    startButton.style.backgroundColor = '#7FFF00'
    pauseButton.style.backgroundColor = '#FF0000'
    resetButton.style.backgroundColor = '#464545'
}

startButton.addEventListener('click', start)
pauseButton.addEventListener('click', pause)
resetButton.addEventListener('click', reset)