window.addEventListener('keydown',function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // para a função
    audio.currentTime = 0; // repete
    audio.play();
    key.classList.add('playing');
})

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // não é uma transição
    e.target.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));