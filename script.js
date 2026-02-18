// ================= PARTICLE SYSTEM =================

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#00d9ff";
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();



const ctaButton = document.querySelector(".cta");

// If ctaButton is null, this will throw error
ctaButton.addEventListener("click", system.launch); 




function verifyServer() {
  return new Promise((resolve, reject) => {
    console.log("Verifying server...");
    // ❌ No resolve() or reject()
  });
}




class QuantumSystem {
  constructor() {
    this.status = "Quantum System Ready";
  }

  launch() {
    console.log(this.status); 
  }
}

const system = new QuantumSystem();




function startBootSequence() {

  console.log("Boot sequence initiated");

  verifyServer().then(() => {
    console.log("Server verified");
  });

  system.launch();


}

ctaButton.addEventListener("click", startBootSequence);
