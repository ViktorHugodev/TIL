const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')


function getSeconds() {
  now = new Date();
  const seconds = now.getSeconds()
  const secondsDegrees = seconds * 6 + 90
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`
  getMinutes()
  getHours()
}

function getMinutes() {
  // const now = new Date();
  const minutes = now.getMinutes()
  const minutesDegrees = minutes * 6 + 90
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
}

function getHours() {
  // const now = new Date()
  const hours = now.getHours()
  const hourDegrees = hours * 30 + 90
  hourHand.style.transform = `rotate(${hourDegrees}deg)`

}

setInterval(getSeconds, 1000)
