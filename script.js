const circle = document.getElementById('circle');

document.addEventListener('mousemove', (event) => {
    const x = event.clientX; // Получаем координату X курсора
    const y = event.clientY; // Получаем координату Y курсора
    circle.style.left = `${x}px`; // Устанавливаем позицию круга по X
    circle.style.top = `${y}px`; // Устанавливаем позицию круга по Y
});

circle.addEventListener('click', () => {
    alert('Круг был нажат!');
});
