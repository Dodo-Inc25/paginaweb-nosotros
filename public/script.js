// cuando accedamos a la pagina y se cargue, se mostrara el año en el que estamos
document.getElementById('year').textContent = new Date().getFullYear();

SnowTheme.config = {
    particleCount: 120,
    sizeRange: [3, 14],   // más variedad
    fallSpeed: 0.12,      // lento
    windPower: 0.2,
};
