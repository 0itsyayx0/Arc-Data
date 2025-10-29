function handleOptionSelected(e) {
    toggleClass(e.target.parentNode, 'hide');
    const id = e.target.id;
    const newValue = e.target.textContent + ' ';
    const titleElem = document.querySelector('.dropdown.title');
    const icon = document.querySelector('.dropdown.title.fa');
    // Resto de la lógica aquí...
}