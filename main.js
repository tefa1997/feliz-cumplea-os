const text = "🎉 ¡Feliz cumpleaños, testardo! 🎉\nLos años de amistad son como estaciones que han dejado huellas en mi corazón.\nHoy deseo que tu día brille como la luz que acompaña nuestros recuerdos.\nCon aprecio sincero… perché certe emozioni vivono oltre il tempo 💋";

const messageElement = document.getElementById("message");
const surpriseBtn = document.getElementById("surpriseBtn");
const musicBtn = document.getElementById("musicBtn");
const player = document.getElementById("player"); // ✅ solo una vez

let index = 0;

function typeWriter() {
  if (index < text.length) {
    messageElement.innerHTML = `<span>${text.substring(0, index + 1)}</span>`;
    index++;
    setTimeout(typeWriter, 80);
  }
}

// Botón sorpresa escurridizo (se mueve al pasar el mouse)
surpriseBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  surpriseBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Al hacer clic en sorpresa → muestra mensaje + globos + confeti
surpriseBtn.addEventListener("click", () => {
  surpriseBtn.style.display = "none";
  messageElement.classList.remove("hidden");
  typeWriter();
  lanzarGlobos();
  lanzarConfeti();
});

// Cambio de canción: primero Las Mañanitas, luego Río Roma
player.addEventListener("ended", () => {
  player.src = "assets/css/imagenes/music/rio-romamp3.mp3"; // ✅ tu archivo guardado
  player.play();
});

// Botón música (play/pause)
musicBtn.addEventListener("click", () => {
  if (player.paused) {
    player.play();
    musicBtn.textContent = "⏸ Pausar música";
  } else {
    player.pause();
    musicBtn.textContent = "▶ Reproducir música";
  }
});

// Globos dinámicos
function lanzarGlobos() {
  const colores = ["yellow", "black", "red"];
  for (let i = 0; i < 10; i++) {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon", colores[Math.floor(Math.random() * colores.length)]);
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.animationDuration = (5 + Math.random() * 5) + "s";
    document.body.appendChild(balloon);
    setTimeout(() => balloon.remove(), 10000);
  }
}

// Confeti dinámico
function lanzarConfeti() {
  const colores = ["yellow", "black", "red"];
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.background = colores[Math.floor(Math.random() * colores.length)];
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = (3 + Math.random() * 3) + "s";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 6000);
  }
}



