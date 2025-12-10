// cuando accedamos a la pagina y se cargue, se mostrara el año en el que estamos
document.getElementById('year').textContent = new Date().getFullYear();

SnowTheme.config = {
    snowflakes: ['❄', '❅', '❆'],      // Snowflake characters
    density: 4,                        // Maximum number of snowflakes
    interval: 123,                      // How often new snowflakes are created (ms)
    minSize: 3.8,                      // Minimum snowflake size
    maxSize: 1.9,                      // Maximum snowflake size
    minDuration: 100,                    // Minimum fall duration (seconds)
    maxDuration: 100,                   // Maximum fall duration (seconds)
    wind: 13,                          // Wind effect strength
    zIndex: 999999                     // Layer level of snowflakes
};
