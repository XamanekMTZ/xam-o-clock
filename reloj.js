const manecillaSegundos = document.querySelector('.segundos-manecilla');
const manecillaMinutos = document.querySelector('.minuto-manecilla');
const manecillaHoras = document.querySelector('.hora-manecilla');
const fechaTexto = document.querySelector('.fecha-hora');

const meses = ["enero", "febrero", "marzo", "mayo", "junio", "julio", "agosto", 
"septiembre", "octubre", "noviembre", "diciembre"];

function ponerHora() {
    const ahora = new Date();

    const segundos = ahora.getSeconds();
    const segundosGrados = ((segundos / 60) * 360) + 90;
    manecillaSegundos.style.transform = `rotate(${segundosGrados}deg)`;

    const minutos = ahora.getMinutes();
    const minutosGrados = ((minutos / 60) * 360) + ((segundos/60)*6) + 90;
    // const minutosGrados = ((minutos / 60 ) * 360) + 90;
    manecillaMinutos.style.transform = `rotate(${minutosGrados}deg)`;

    const horas = ahora.getHours();
    const horasGrados = ( ( horas / 12 ) * 360) + ( ( minutos / 60 ) * 30 ) + 90;
    manecillaHoras.style.transform = `rotate(${horasGrados}deg)`;

    const dia = ahora.getDate();
    const mes = ahora.getUTCMonth();
    const year = ahora.getFullYear();
    fechaTexto.innerHTML = `<span>Son las ${horas}:${minutos}:${segundos} horas</span>
                            <br>
                            <span>${dia} de ${meses[mes]} de ${year}</span>`;
}

setInterval(ponerHora, 1000);

ponerHora();