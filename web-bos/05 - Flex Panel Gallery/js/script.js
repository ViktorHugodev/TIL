const panel = document.querySelectorAll('.panel')

function toglle() {
  this.classList.toggle('open-active')
}

panel.forEach(item => item.addEventListener('click', toglle))
