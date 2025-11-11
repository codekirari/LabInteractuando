let votosMusica = 0;
let votosLiteratura = 0;
let votosCine = 0;
let totalVotos = 0;

function votar(opcion) {
    if (opcion === 'musica') {
        votosMusica++;
        document.getElementById('votos-musica').textContent = votosMusica;
    } else if (opcion === 'literatura') {
        votosLiteratura++;
        document.getElementById('votos-literatura').textContent = votosLiteratura;
    } else if (opcion === 'cine') {
        votosCine++;
        document.getElementById('votos-cine').textContent = votosCine;
    }

    alert('¡Gracias por tu voto!');
    totalVotos++;
    if (totalVotos % 5 === 0) {
        console.log('Total acumulado de votos: ' + totalVotos);
    }
}
