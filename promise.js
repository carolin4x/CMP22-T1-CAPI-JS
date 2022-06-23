console.log('primeiro log');
//o setTimeout executa de forma assincrona neste caso no tempo de 2 segundos, diferente dos outros consoles.log
setTimeout(() => { 
    console.log('segundo log');
}, 2000)
console.log('terceiro log');

console.log('quarto log');
