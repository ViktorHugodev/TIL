const inputs = document.querySelectorAll('.controls input')

function handleUpdate() {
  const sufix = this.dataset.sizing || ''
  document.documentElement.style.setProperty(`--${this.name}`, this.value + sufix)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))