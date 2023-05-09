//evento addEventListener() é um observador

function soltou(e){
  console.log(e.code);
  console.log('Tecla apertada: ' + e.code) // descobrir qual tecla está apertada
  console.log('Shift? ' + e.shiftkey);
  console.log('Ctrl ' + e.ctrltkey);
  console.log('Alt? ' + e.alttkey);
  console.log('--');
}

const input = document.querySelector('input');
input.addEventListener('keyup', soltou);