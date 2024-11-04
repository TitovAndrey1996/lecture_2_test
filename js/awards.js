console.log("awards.js is loaded and running");

document.addEventListener("htmx:afterSwap", (event) => {
    console.log("htmx:afterSwap event triggered"); // Перевіряємо, чи подія взагалі спрацьовує
    if (event.detail.target.querySelector('.awards__item')) {
        console.log("Awards partial loaded. Attaching event listeners.");

        document.querySelectorAll('.awards__item').forEach(item => {
            item.addEventListener('mouseover', () => {
                console.log('Mouse over award item');
                item.classList.add('hovered');
            });
            item.addEventListener('mouseout', () => {
                console.log('Mouse out of award item');
                item.classList.remove('hovered');
            });
        });
    }
});


