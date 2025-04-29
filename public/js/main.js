// Animación en fade-in para todos los elementos marcados
window.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.fade-in');
    items.forEach((item, i) => {
      item.style.animationDelay = `${i * 0.1}s`;
    });
  });