const text = "🎉 ¡Feliz cumpleaños, testardo! 🎉\nLos años de amistad me enseñaron a quererte incluso con tus muros.\nY aquí sigo, con cariño maduro y un toque provocador… perché sai che non posso resistere 💋";


const messageElement = document.getElementById("message");
const surpriseBtn = document.getElementById("surpriseBtn");
const musicBtn = document.getElementById("musicBtn");
const song = document.getElementById("song");

let index = 0;

function typeWriter() {
  if (index < text.length) {
    messageElement.innerHTML = `<span>${text.substring(0, index + 1)}</span>`;
    index++;
    setTimeout(typeWriter, 80);
  }
}

// Botón sorpresa que se mueve juguetonamente
surpriseBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  surpriseBtn.style.transform = `translate(${x}px, ${y}px)`;
});

surpriseBtn.addEventListener("click", () => {
  surpriseBtn.style.display = "none";
  messageElement.classList.remove("hidden");
  typeWriter();
  lanzarGlobos();
  lanzarConfeti();
});

// Botón música
musicBtn.addEventListener("click", () => {
  song.play();
});

// Generar globos dinámicamente
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

// Generar confeti dinámicamente
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

