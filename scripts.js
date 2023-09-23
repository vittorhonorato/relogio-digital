function relogioAtualiza() {
    const horas = document.getElementById('hours');
    const minutos = document.getElementById('minutes');
    const segundos = document.getElementById('seconds');

    const horaAtual = new Date();
    const valorHoras = horaAtual.getHours().toString().padStart(2,'0');
    const valorMinutos = horaAtual.getMinutes().toString().padStart(2,'0');
    const valorSegundos = horaAtual.getSeconds().toString().padStart(2,'0');
  

    horas.textContent = valorHoras;
    minutos.textContent = valorMinutos;
    segundos.textContent = valorSegundos;
}

setInterval(relogioAtualiza,1000);

