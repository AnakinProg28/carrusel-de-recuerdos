// 1. LISTA COMPLETA DE FOTOS (Añade todas las que quieras aquí)

const carpeta = "images/";

const nombresArchivos = [
    "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg",
    "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg",
    "img9.jpg", "img10.jpg", "img11.jpg", "img12.jpeg", "img13.jpeg",
];

const misFotos = nombresArchivos.map(nombre => carpeta + nombre);


let indiceSiguienteFoto = 8; // Empezamos a traer desde la novena foto
const container = document.getElementById('bubbles');

// --- FUNCIÓN PARA INTERCAMBIAR FOTOS AUTOMÁTICAMENTE ---
function intercambiarFotos() {
    const celdas = document.querySelectorAll('.carousel__cell img');
    // Elegimos una celda al azar para cambiarle la foto
    const celdaAleatoria = celdas[Math.floor(Math.random() * celdas.length)];
    
    // Desvanecer para que el cambio no sea brusco
    celdaAleatoria.style.opacity = "0";
    
    setTimeout(() => {
        celdaAleatoria.src = misFotos[indiceSiguienteFoto];
        celdaAleatoria.style.opacity = "1";
        
        // Avanzar en la lista de todas las fotos
        indiceSiguienteFoto++;
        if (indiceSiguienteFoto >= misFotos.length) {
            indiceSiguienteFoto = 0; // Reiniciar ciclo si llegamos al final
        }
    }, 1000); 
}

// Ejecutar intercambio cada 7 segundos
setInterval(intercambiarFotos, 7000);

// --- BURBUJAS ---
function createBubble() {
    if (!container) return;
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    const size = Math.random() * 15 + 10 + "px";
    bubble.style.width = size;
    bubble.style.height = size;
    bubble.style.left = Math.random() * 100 + "vw";
    bubble.style.animationDuration = Math.random() * 5 + 4 + "s";
    container.appendChild(bubble);
    setTimeout(() => { bubble.remove(); }, 8000);
}
setInterval(createBubble, 200);

// --- ZOOM E INICIO DE MÚSICA ---
let musicaIniciada = false;

function zoomImg(element) {
    // Iniciar música al hacer clic
    const audio = document.getElementById('musicaFondo');
    if (!musicaIniciada && audio) {
        audio.volume = 0.5;
        audio.play();
        musicaIniciada = true;
    }
    // Abrir Modal
    const modal = document.getElementById("modal");
    const fullImg = document.getElementById("fullImg");
    modal.style.display = "block";
    fullImg.src = element.src;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// También iniciar música si hacen clic en cualquier parte de la pantalla
window.addEventListener('click', () => {
    const audio = document.getElementById('musicaFondo');
    if (!musicaIniciada && audio) {
        audio.volume = 0.5;
        audio.play();
        musicaIniciada = true;
    }
});

// --- FRASES DE DESPEDIDA ---
const frases = [
    "Te amo, y precisamente porque te amo, te dejo ir.",
    "Fuiste mi lugar favorito en el mundo.",
    "Guardaré nuestros recuerdos como el tesoro más grande.",
    "A veces amar también significa saber decir adiós.",
    "Gracias por enseñarme lo que es el amor verdadero.",
    "Aunque nuestros caminos se separen, una parte de mí siempre te pertenecerá.",
    "Deseo que encuentres toda la felicidad que yo no pude darte.",
    "Te suelto con el corazón lleno de gratitud y un poco de dolor."
];

let fraseIndex = 0;
const elementoFrase = document.getElementById('frase-despedida');

function cambiarFrase() {
    if(!elementoFrase) return;
    elementoFrase.style.opacity = 0;
    setTimeout(() => {
        fraseIndex = (fraseIndex + 1) % frases.length;
        elementoFrase.innerText = frases[fraseIndex];
        elementoFrase.style.opacity = 1;
    }, 1000);
}

setInterval(cambiarFrase, 6000);
