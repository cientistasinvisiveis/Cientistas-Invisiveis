const switchTema = document.getElementById('modoEscuroSwitch');
const htmlTag = document.documentElement;

const temaSalvo = localStorage.getItem('tema');
if (temaSalvo === 'dark') {
    htmlTag.setAttribute('data-bs-theme', 'dark');
    switchTema.checked = true;
}

switchTema.addEventListener('change', () => {
    if (switchTema.checked) {
        htmlTag.setAttribute('data-bs-theme', 'dark');
        localStorage.setItem('tema', 'dark');
    } else {
        htmlTag.setAttribute('data-bs-theme', 'light');
        localStorage.setItem('tema', 'light');
    }
});