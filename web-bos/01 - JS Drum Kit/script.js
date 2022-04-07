

window.addEventListener('keydown', playAudio)

function removePlay(){
  this.classList.remove('playing')
}

function playAudio(e){
  audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  
  if(!audio) return 
  
  audio.play()
  audio.currentTime = 0
  key.classList.add('playing')
  
  keys = document.querySelectorAll('.key')
  keys.forEach(key => {
    key.addEventListener('transitionend', removePlay)
  })
}