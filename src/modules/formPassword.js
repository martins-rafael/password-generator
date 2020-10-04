import passwordGenerator from './generators';

const generatedPassword = document.querySelector('.generated-password');
const charactersQtd = document.querySelector('.chars-qtd');
const checkUppercase = document.querySelector('.chk-uppercase');
const checkLowercase = document.querySelector('.chk-lowercase');
const checkNumber = document.querySelector('.chk-number');
const checkSymbol = document.querySelector('.chk-symbol');
const generatePasswordButton = document.querySelector('.generate-password');

export default () => {
    generatePasswordButton.addEventListener('click', () => {
        generatedPassword.innerHTML = generator();
    });
}

function generator() {
    const password = passwordGenerator(
        charactersQtd.value,
        checkUppercase.checked,
        checkLowercase.checked,
        checkNumber.checked,
        checkSymbol.checked
    );

    return password || 'Nada selecionado.';
}