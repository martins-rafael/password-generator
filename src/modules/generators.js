const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const uppercaseGenerator = () => String.fromCharCode(rand(65, 91));
const lowercaseGenerator = () => String.fromCharCode(rand(97, 123));
const numberGenerator = () => String.fromCharCode(rand(48, 58));
const symbols = ',.;^~[]{}!@#$%&()_+=-';
const symbolGenerator = () => symbols[rand(0, symbols.length)];

export default function passwordGenerator(qtd, uppercase, lowercase, number, symbol) {
    const passwordArray = [];
    qtd = Number(qtd);

    for (let i = 0; i < qtd; i++) {
        uppercase && passwordArray.push(uppercaseGenerator());
        lowercase && passwordArray.push(lowercaseGenerator());
        number && passwordArray.push(numberGenerator());
        symbol && passwordArray.push(symbolGenerator());
    }

    return passwordArray.join('').slice(0, qtd);
}