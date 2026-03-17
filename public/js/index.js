const canvas = document.getElementById("dot-bg");
const hero = document.querySelector(".hero");
const ctx = canvas.getContext("2d");

const bgCanvas = document.createElement("canvas");
const bgCtx = bgCanvas.getContext("2d");

let mouseX = -9999;
let mouseY = -9999;

function resizeCanvas() {
  canvas.width = hero.clientWidth;
  canvas.height = hero.clientHeight;
  buildDotGrid(); 
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

hero.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
});

hero.addEventListener("mouseleave", () => {
  mouseX = -9999;
  mouseY = -9999;
});

function buildDotGrid() {
  bgCanvas.width = canvas.width;
  bgCanvas.height = canvas.height;

  bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
  bgCtx.fillStyle = "rgba(255, 255, 255, 0.20)";

  const spacing = 10;
  const radius = 1;

  bgCtx.beginPath();
  for (let x = 0; x < bgCanvas.width; x += spacing) {
    for (let y = 0; y < bgCanvas.height; y += spacing) {
      bgCtx.moveTo(x + radius, y);
      bgCtx.arc(x, y, radius, 0, Math.PI * 2);
    }
  }
  bgCtx.fill();
}

function drawHighlights() {
  if (mouseX < 0) return;

  const spacing = 10;
  const radius = 1;
  const maxDist = 200;
  const maxDistSq = maxDist * maxDist;

  const startX = Math.floor((mouseX - maxDist) / spacing) * spacing;
  const endX   = Math.ceil((mouseX + maxDist) / spacing) * spacing;
  const startY = Math.floor((mouseY - maxDist) / spacing) * spacing;
  const endY   = Math.ceil((mouseY + maxDist) / spacing) * spacing;

  ctx.fillStyle = "white";

  for (let x = startX; x <= endX; x += spacing) {
    for (let y = startY; y <= endY; y += spacing) {
      const dx = x - mouseX;
      const dy = y - mouseY;
      const distSq = dx * dx + dy * dy;

      if (distSq < maxDistSq) {
        // const alpha = (1 - Math.sqrt(distSq) / maxDist) * 0.25;

        const t = Math.sqrt(distSq) / maxDist;
        const falloff = Math.pow(1 - t, 3); // 2–4 range
        const alpha = falloff * 0.6;

        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  ctx.globalAlpha = 1;
}



function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw bg
  ctx.drawImage(bgCanvas, 0, 0);

  // draw the glowing thingy
  drawHighlights();

  requestAnimationFrame(animate);
}
animate();

