const horn = document.querySelector('.svg-horn')

const playAudio = audio => {
  const soundEffect = new Audio(audio)
  soundEffect.play()
}

horn.addEventListener('click', () => playAudio('./sounds/fanfare3.wav'))
