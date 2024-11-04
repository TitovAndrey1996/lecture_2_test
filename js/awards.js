document.querySelectorAll('.awards__item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('hovered');
    });
    item.addEventListener('mouseout', () => {
        item.classList.remove('hovered');
    });
});