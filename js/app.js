let segundos = 0;

const contador = document.getElementById('contador');

setInterval(()=>{
  segundos++;
  contador.innerText = segundos;
  contador.style.fontSize = `${segundos / 0.25}px`;
  },1000);
