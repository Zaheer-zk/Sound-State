const sounds = [
  'koi mil Gaya',
  'koi mil Gaya 2',
  'Jadu Udgya',
  'Krish mil gya',
  'Maa ek baat bolu',
]

sounds.forEach((sound) => {
  const btn = document.createElement('button')
  btn.classList.add('btn')

  btn.innerText = sound

  btn.addEventListener('click', () => {
    songStop()

    document.getElementById(sound).play()
  })

  document.getElementById('buttons').appendChild(btn)
})

function songStop() {
  sounds.forEach( sound => {
    const song = document.getElementById(sound)

    song.pause()
    song.currentTime = 0
  })
}
