
const impresion = require('./impresion');

test('Validar que se imprima una cadena de texto', ()=>{
    expect(impresion.holaMundo()).toBe('¡Hola Mundo!');
});