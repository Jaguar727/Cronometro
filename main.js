const texto = document.querySelector('.relogio')
const divtempo = document.querySelector('.relogio .horario')
const start_btn = document.getElementById('start')
const stop_btn = document.getElementById('stop')
const reset_btn = document.getElementById('reset')
const divms = document.querySelector('.relogio .milisegundos')

let milisegundos = 0
let intervalo = null
let intervaloms = null

start_btn.addEventListener('click', start)
stop_btn.addEventListener('click', stop)
reset_btn.addEventListener('click', reset)

function timer() {
  milisegundos++

  let hrs = Math.floor(milisegundos / (60 * 60 * 100))
  let mins = Math.floor(((milisegundos - hrs * (60 * 6000)) / 6000) % 60)
  let segs = Math.floor(((milisegundos - mins * (60 * 100)) / 100) % 60)
  let milis = milisegundos % 100

  if (segs < 10) {
    segs = '0' + segs
  }

  if (mins < 10) {
    mins = '0' + mins
  }

  if (hrs < 10) {
    hrs = '0' + hrs
  }

  if (milis < 10) {
    milis = '0' + milis
  }

  divtempo.innerText = `${hrs}:${mins}:${segs}`
  divms.innerText = `.${milis}`

  texto.classList.remove("paused")
}

function start() {
  if (intervalo) {
    return
  }

  intervalo = setInterval(timer, 10)
}

function stop() {
  clearInterval(intervalo)
  intervalo = null
  texto.classList.add("paused")
}

function reset() {
  stop()
  milisegundos = 0
  divtempo.innerText = '00:00:00'
  divms.innerText = '.00'
}
