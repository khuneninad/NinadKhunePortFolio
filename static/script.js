// --- Canvas Background Animation (Data Network Nodes) ---
const canvas = document.getElementById('network-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];

// Configuration
const connectionDistance = 150;
const particleCount = 80;

function init() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    particles = [];
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 1;
        this.vy = (Math.random() - 0.5) * 1;
        this.radius = Math.random() * 2 + 1;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(20, 184, 166, 0.5)'; // Teal color
        ctx.fill();
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < connectionDistance) {
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = `rgba(20, 184, 166, ${1 - dist / connectionDistance})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    }
}

window.addEventListener('resize', init);

// Start
init();
animate();
